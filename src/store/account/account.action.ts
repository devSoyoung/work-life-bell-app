import {
  makeActionCreator,
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from '../../utils/actionHelper';

export const AccountActionTypes = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  LOGOUT: 'LOGOUT',
  REGISTER: makeAsyncActionTypes('REGISTER'),
};

type AccountActionCreatorsType = {
  login: Function,
  logout: Function,
  register: Function,
};

export const AccountActionCreators: AccountActionCreatorsType = {
  login: makeAsyncActionCreator(AccountActionTypes.LOGIN),
  logout: makeActionCreator(AccountActionTypes.LOGOUT),
  register: makeAsyncActionCreator(AccountActionTypes.REGISTER),
};
