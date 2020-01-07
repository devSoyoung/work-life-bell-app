import { all } from 'redux-saga/effects';

import { accountSagas } from './account/account.saga';
import { attendanceSagas } from './attendance/attendance.saga';

export default function* rootSaga() {
  yield all([
    ...accountSagas,
    ...attendanceSagas,
  ]);
}
