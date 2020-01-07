import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';
import attendanceReducer from './attendance/attendance.reducer';

import { initialState as accountInitialState } from './account/account.reducer';
import { initialState as attendanceInitialState } from './attendance/attendance.reducer';

export default function createRootReducer() {
  return combineReducers({
    account: accountReducer,
    attendance: attendanceReducer,
  });
}

export const initialState = {
  account: accountInitialState,
  attendance: attendanceInitialState,
};
