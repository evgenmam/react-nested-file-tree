import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchGetData } from './getData';

export function* watchData(): SagaIterator<void> {
  yield all([call(watchGetData)]);
}
