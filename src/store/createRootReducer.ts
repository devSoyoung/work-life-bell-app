import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';

export default function createRootReducer() {
  return combineReducers({
    account: accountReducer,
  });
}
