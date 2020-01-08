import { call, put, takeLatest } from 'redux-saga/effects';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

import { AccountApi } from '../../api';
import { AccountActionTypes, AccountActionCreators } from './account.action';

export function* login(action) {
  try {
    yield put(AccountActionCreators.loginRequest());
    const response = yield call(AccountApi.login, action.payload);
    const { accessToken, refreshToken } = response.data;

    yield Promise.all([
      SecureStore.setItemAsync('accessToken', JSON.stringify(accessToken)),
      SecureStore.setItemAsync('refreshToken', JSON.stringify(refreshToken)),
    ]);

    yield put(
      AccountActionCreators.loginSuccess({
        email: action.payload.email,
      }),
    );
  } catch (error) {
    Alert.alert('로그인 실패', '일치하는 사용자를 찾을 수 없습니다.\n이메일과 비밀번호를 다시 확인 해 주세요.');
    yield put(AccountActionCreators.loginFailure(error));
  }
}

export function* register(action) {
  try {
    yield put(AccountActionCreators.registerRequest());
    const response = yield call(AccountApi.register, action.payload);
    const { accessToken, refreshToken } = response;

    yield Promise.all([
      SecureStore.setItemAsync('accessToken', accessToken),
      SecureStore.setItemAsync('refreshToken', refreshToken),
    ]);

    yield put(
      AccountActionCreators.registerSuccess({
        email: action.payload.email,
      }),
    );
  } catch (err) {
    Alert.alert('회원가입 실패', '이미 등록된 이메일입니다.');
    yield put(AccountActionCreators.registerFailure(err));
  }
}

export const accountSagas = [
  takeLatest(AccountActionTypes.LOGIN, login),
  takeLatest(AccountActionTypes.REGISTER, register),
];
