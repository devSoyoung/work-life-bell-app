import RequestApi from '../utils/request';

type AccountData = {
  email: string,
  password: string,
};

const login = (accountData: AccountData) => {
  return RequestApi.post('/auth/email/login', {
    ...accountData,
  })
};

const register = (accountData: AccountData) => {
  return RequestApi.post('/auth/email/register', {
    ...accountData,
  })
};

export default {
  login,
  register,
}
