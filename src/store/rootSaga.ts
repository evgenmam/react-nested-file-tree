import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchData } from './data/watchers';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(watchData)]);
}
