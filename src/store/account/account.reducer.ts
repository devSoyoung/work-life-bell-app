import { AccountActionTypes } from './account.action';
import AccountStateType from '../../types/store/account';

export const initialState: AccountStateType = {
  login: false,
};

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case AccountActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
      };

    case AccountActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        login: true,
      };

    default:
      return state;
  }
};

export default accountReducer;
