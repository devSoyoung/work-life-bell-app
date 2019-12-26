import { call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { AccountApi } from '../../api';
import { AccountActionTypes, AccountActionCreators } from './account.action';

export function* login(action) {
  try {
    yield put(AccountActionCreators.login.request());
    const response = yield call(AccountApi.login, action.payload);
    const { accessToken, refreshToken } = response;

    console.log(`accessToken: ${accessToken}, refreshToken: ${refreshToken}`);

    yield put(
      AccountActionCreators.login.success({
        email: action.payload.email,
      }),
    );
  } catch (error) {
    Alert.alert('로그인 실패', '일치하는 사용자를 찾을 수 없습니다.\n이메일과 비밀번호를 다시 확인 해 주세요.');
    yield put(AccountActionCreators.login.failure(error));
  }
}

export function* register(action) {
  try {
    console.log('register:', action);
    yield put(AccountActionCreators.register.request());
    const response = yield call(AccountApi.register, action.payload);
    const { accessToken, refreshToken } = response;

    console.log(`accessToken: ${accessToken}, refreshToken: ${refreshToken}`);

    yield put(
      AccountActionCreators.register.success({
        email: action.payload.email,
      }),
    );
  } catch (err) {
    Alert.alert('회원가입 실패', '이미 등록된 이메일입니다.');
    yield put(AccountActionCreators.register.failure(error));
  }
}

export const accountSagas = [
  takeLatest(AccountActionTypes.LOGIN.INDEX, login),
  takeLatest(AccountActionTypes.REGISTER.INDEX, register),
];
