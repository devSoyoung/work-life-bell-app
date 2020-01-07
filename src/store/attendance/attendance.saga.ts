import { call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { AttendanceApi } from '../../api';
import { AttendanceActionTypes, AttendanceActionCreators } from './attendance.action';

export function* fetchTodayLog(action) {
  console.log('fetchTodayLog');
  try {
    yield put(AttendanceActionCreators.fetchTodayLogRequest());
    const response = yield call(AttendanceApi.todayAttendanceLog);
    console.log('response:', response);

    // yield put(
    //   AttendanceActionCreators.({
    //     email: action.payload.email,
    //   }),
    // );
  } catch (error) {
    console.log('error:', error.code);
    // Alert.alert('로그인 실패', '일치하는 사용자를 찾을 수 없습니다.\n이메일과 비밀번호를 다시 확인 해 주세요.');
    yield put(AttendanceActionCreators.fetchTodayLogFailure(error));
  }
}

export const attendanceSagas = [
  takeLatest(AttendanceActionTypes.FETCH_TODAY_LOG, fetchTodayLog),
];
