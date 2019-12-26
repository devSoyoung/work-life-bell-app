import RequestApi from '../utils/request';

type LoginAccountData = {
  email: string,
  password: string,
};

const login = (loginAccountData: LoginAccountData) => {
  return RequestApi.post('', {
    ...loginAccountData,
  });
};

export default {
  login,
}
