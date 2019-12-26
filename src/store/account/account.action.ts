import {
  makeActionCreator,
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from '../../utils/actionHelper';

export const AccountActionTypes = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  LOGOUT: 'LOGOUT',
};

type AccountActionCreatorsType = {
  login: Function,
  logout: Function,
};

export const AccountActionCreators: AccountActionCreatorsType = {
  login: makeAsyncActionCreator(AccountActionTypes.LOGIN),
  logout: makeActionCreator(AccountActionTypes.LOGOUT),
};
