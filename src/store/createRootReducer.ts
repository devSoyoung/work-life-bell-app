import { combineReducers } from 'redux';

import workReducer from './work/work.reducer';
import authReducer from './auth/auth.reducer';

export default function createRootReducer() {
  return combineReducers({
    work: workReducer,
    auth: authReducer,
  });
}
