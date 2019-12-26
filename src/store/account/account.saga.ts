import { call, put, takeLatest } from 'redux-saga/effects';

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
    console.log('loginError:', error);
    yield put(AccountActionCreators.login.failure(error));
  }
}

export const accountSagas = [
  takeLatest(AccountActionTypes.LOGIN.INDEX, login),
];
