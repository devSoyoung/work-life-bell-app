import { call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { AttendanceApi } from '../../api';
import { AttendanceActionTypes, AttendanceActionCreators } from './attendance.action';

import WorkState from '../../types/workState';

export function* fetchTodayLog() {
  console.log('fetchTodayLog');
  try {
    yield put(AttendanceActionCreators.fetchTodayLogRequest());
    const response = yield call(AttendanceApi.todayAttendanceLog);
    const { onWorkDateTime } = response;
    yield put(
      AttendanceActionCreators.fetchTodayLogSuccess({
        workState: WorkState.ON_WORK,
        onWorkDateTime,
      }),
    );

  } catch (error) {
    console.log('error:', error.response);
    // Alert.alert('로그인 실패', '일치하는 사용자를 찾을 수 없습니다.\n이메일과 비밀번호를 다시 확인 해 주세요.');
    yield put(AttendanceActionCreators.fetchTodayLogFailure(error));
  }
}

export function* setOnWork() {
  try {
    yield put(AttendanceActionCreators.setOnworkRequest());
    const response = yield call(AttendanceApi.setOnWork);
    const { onWorkDate, onWorkDateTime } = response;
    yield put(AttendanceActionCreators.setOnworkSuccess(onWorkDateTime));
  } catch (error) {
    if (error.response.status === 409) {
      Alert.alert('출근 등록 실패', '오늘의 출근시간이 이미 등록되었습니다.');
    } else {
      Alert.alert('출근 등록 실패', '알 수 없는 오류가 발생했습니다.\n오류가 반복되면 관리자에게 문의하세요 :(');
      console.log('error:', error.response);
    }
    yield put(AttendanceActionCreators.setOnworkFailure(error));
  }
}

export const attendanceSagas = [
  takeLatest(AttendanceActionTypes.FETCH_TODAY_LOG, fetchTodayLog),
  takeLatest(AttendanceActionTypes.SET_ONWORK, setOnWork),
];
