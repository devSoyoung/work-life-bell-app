import {
  makeActionCreator,
} from '../../utils/actionHelper';

export const AccountActionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
};

type AccountActionCreatorsType = {
  login: Function,
  loginRequest: Function,
  loginSuccess: Function,
  loginFailure: Function,
  logout: Function,
  register: Function,
  registerRequest: Function,
  registerSuccess: Function,
  registerFailure: Function,
};

export const AccountActionCreators: AccountActionCreatorsType = {
  login: makeActionCreator(AccountActionTypes.LOGIN),
  loginRequest: makeActionCreator(AccountActionTypes.LOGIN_REQUEST),
  loginSuccess: makeActionCreator(AccountActionTypes.LOGIN_SUCCESS),
  loginFailure: makeActionCreator(AccountActionTypes.LOGIN_FAILURE),
  logout: makeActionCreator(AccountActionTypes.LOGOUT),
  register: makeActionCreator(AccountActionTypes.REGISTER),
  registerRequest: makeActionCreator(AccountActionTypes.REGISTER_REQUEST),
  registerSuccess: makeActionCreator(AccountActionTypes.REGISTER_SUCCESS),
  registerFailure: makeActionCreator(AccountActionTypes.REGISTER_FAILURE),
};
