import {
  makeActionCreator,
} from '../../utils/actionHelper';

export const AttendanceActionTypes = {
  FETCH_TODAY_LOG: 'FETCH_TODAY_LOG',
  FETCH_TODAY_LOG_REQUEST: 'FETCH_TODAY_LOG_REQUEST',
  FETCH_TODAY_LOG_SUCCESS: 'FETCH_TODAY_LOG_SUCCESS',
  FETCH_TODAY_LOG_FAILURE: 'FETCH_TODAY_LOG_FAILURE',
  SET_ONWORK: 'SET_ONWORK',
  SET_ONWORK_REQUEST: 'SET_ONWORK_REQUEST',
  SET_ONWORK_SUCCESS: 'SET_ONWORK_SUCCESS',
  SET_ONWORK_FAILURE: 'SET_ONWORK_FAILURE',
  ADD_WORK_TIME: 'ADD_WORK_TIME',
  ADD_WORK_TIME_SUCCESS: 'ADD_WORK_TIME_SUCCESS',
  SET_OFFWORK: 'SET_OFFWORK',
  SET_OFFWORK_REQUEST: 'SET_OFFWORK_REQUEST',
  SET_OFFWORK_SUCCESS: 'SET_OFFWORK_SUCCESS',
  SET_OFFWORK_FAILURE: 'SET_OFFWORK_FAILURE',
};

type AttendanceActionCreatorsType = {
  fetchTodayLog: Function,
  fetchTodayLogRequest: Function,
  fetchTodayLogSuccess: Function,
  fetchTodayLogFailure: Function,
  setOnwork: Function,
  setOnworkRequest: Function,
  setOnworkSuccess: Function,
  setOnworkFailure: Function,
  addWorkTime: Function,
  addWorkTimeSuccess: Function,
  setOffwork: Function,
  setOffworkRequest: Function,
  setOffworkSuccess: Function,
  setOffworkFailure: Function,
};

export const AttendanceActionCreators: AttendanceActionCreatorsType = {
  fetchTodayLog: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG),
  fetchTodayLogRequest: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_REQUEST),
  fetchTodayLogSuccess: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_SUCCESS),
  fetchTodayLogFailure: makeActionCreator(AttendanceActionTypes.FETCH_TODAY_LOG_FAILURE),
  setOnwork: makeActionCreator(AttendanceActionTypes.SET_ONWORK),
  setOnworkRequest: makeActionCreator(AttendanceActionTypes.SET_ONWORK_REQUEST),
  setOnworkSuccess: makeActionCreator(AttendanceActionTypes.SET_ONWORK_SUCCESS),
  setOnworkFailure: makeActionCreator(AttendanceActionTypes.SET_ONWORK_FAILURE),
  addWorkTime: makeActionCreator(AttendanceActionTypes.ADD_WORK_TIME),
  addWorkTimeSuccess: makeActionCreator(AttendanceActionTypes.ADD_WORK_TIME_SUCCESS),
  setOffwork: makeActionCreator(AttendanceActionTypes.SET_OFFWORK),
  setOffworkRequest: makeActionCreator(AttendanceActionTypes.SET_OFFWORK_REQUEST),
  setOffworkSuccess: makeActionCreator(AttendanceActionTypes.SET_OFFWORK_SUCCESS),
  setOffworkFailure: makeActionCreator(AttendanceActionTypes.SET_OFFWORK_FAILURE),
};
