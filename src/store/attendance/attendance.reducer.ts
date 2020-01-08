import { AttendanceActionTypes } from './attendance.action';
import moment from 'moment';

import AttendanceStateType from '../../types/store/attendance';
import WorkState from '../../types/workState';

export const initialState: AttendanceStateType = {
  workState: WorkState.BEFORE_WORK,
  isRequestingTodayLog: false,
  isRequestingOnwork: false,
  onWorkDateTime: '',
  offWorkDateTime: '',
  workTime: [0, 0, 0],
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
        workState: action.payload.workState,
        onWorkDateTime: action.payload.onWorkDateTime,
        workTime: action.payload.workTime,
      };

    case AttendanceActionTypes.FETCH_TODAY_LOG_FAILURE:
      return {
        ...state,
        isFetchingTodayLog: false,
      };

    case AttendanceActionTypes.SET_ONWORK_REQUEST:
      return {
        ...state,
        isRequestingOnwork: true,
      };

    case AttendanceActionTypes.SET_ONWORK_SUCCESS:
      return {
        ...state,
        isRequestingOnwork: false,
        workState: WorkState.ON_WORK,
        onWorkDateTime: action.payload.onWorkDateTime,
        workTime: action.payload.workTime,
      };

    case AttendanceActionTypes.ADD_WORK_TIME_SUCCESS:
      return {
        ...state,
        workTime: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;
