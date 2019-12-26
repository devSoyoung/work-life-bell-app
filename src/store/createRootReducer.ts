import { combineReducers } from 'redux';

import workReducer from './work/work.reducer';
import accountReducer from './account/account.reducer';

export default function createRootReducer() {
  return combineReducers({
    work: workReducer,
    account: accountReducer,
  });
}
