import { AttendanceActionTypes } from './attendance.action';

type AuthState = {
  isFetchingTodayLog: boolean,
};

export const initialState: AuthState = {
  isFetchingTodayLog: false,
};

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case AttendanceActionTypes.FETCH_TODAY_LOG_REQUEST:
      return {
        ...state,
        isFetchingTodayLog: true,
      };

    case AttendanceActionTypes.FETCH_TODAY_LOG_SUCCESS:
      return {
        ...state,
        isFetchingTodayLog: false,
      };

    case AttendanceActionTypes.FETCH_TODAY_LOG_FAILURE:
      return {
        ...state,
        isFetchingTodayLog: false,
      };

    default:
      return state;
  }
};

export default accountReducer;
