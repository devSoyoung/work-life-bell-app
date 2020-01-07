import {
  makeActionCreator,
} from '../../utils/actionHelper';

export const AttendanceActionTypes = {
  FETCH_TODAY_LOG: 'FETCH_TODAY_LOG',
  FETCH_TODAY_LOG_REQUEST: 'FETCH_TODAY_LOG_REQUEST',
  FETCH_TODAY_LOG_SUCCESS: 'FETCH_TODAY_LOG_SUCCESS',
  FETCH_TODAY_LOG_FAILURE: 'FETCH_TODAY_LOG_FAILURE',
};

type AttendanceActionCreatorsType = {
  fetchTodayLog: Function,
  fetchTodayLogRequest: Function,
  fetchTodayLogSuccess: Function,
  fetchTodayLogFailure: Function,
};

export const AttendanceActionCreators: AttendanceActionCreatorsType = {
  fetchTodayLog: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG),
  fetchTodayLogRequest: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_REQUEST),
  fetchTodayLogSuccess: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_SUCCESS),
  fetchTodayLogFailure: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_FAILURE),
};
