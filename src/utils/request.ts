import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { pickBy } from 'lodash';

const parsingEmptyValueParams = params =>
  pickBy(params, value => value != null && value !== '');

const RequestApi = axios.create();

RequestApi.defaults.baseURL = 'http://api.worklifebell.ryulth.com/api';

RequestApi.interceptors.request.use(
  async config => {
    const parsedParams = parsingEmptyValueParams(config.params);
    config.params = parsedParams;

    const tokenString = await SecureStore.getItemAsync('accessToken');
    const accessToken = JSON.parse(tokenString);
    const isLoginURL = config.url && config.url.includes('auth');

    if (accessToken && isLoginURL === false) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

const NOT_AUTHORIZED_HTTP_CODE = 401;

RequestApi.interceptors.response.use(
  response => {
    if (response && response.config.method !== 'get') {

    }
    return response.data;
  },
  error => {
    const { config, response } = error;
    const originalRequest = config;

    if (
      response &&
      response.status === NOT_AUTHORIZED_HTTP_CODE &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      // token refresh 요청
    }

    return Promise.reject(error);
  },
);

export default RequestApi;
