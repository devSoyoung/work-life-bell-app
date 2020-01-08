// import RequestApi from '../utils/request';
import axios from 'axios';

const RequestApi = axios.create();
RequestApi.defaults.baseURL = 'http://api.worklifebell.ryulth.com/';

type AccountData = {
  email: string,
  password: string,
};

const login = (accountData: AccountData) => {
  return RequestApi.post('/auth/login/email', {
    ...accountData,
  })
};

const register = (accountData: AccountData) => {
  return RequestApi.post('/auth/register/email', {
    ...accountData,
  })
};

export default {
  login,
  register,
}
