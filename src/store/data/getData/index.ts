import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';

import { actions as actionsData } from '../data';

export const getDataAsync = createAction('getDataAsync');

function* getDataWorker(): SagaIterator<void> {
  try {
    const data = yield apply(api, api.data.get, []);
    yield put(actionsData.fillData(data));
  } catch (error: any) {
    yield put(
      actionsData.fillData([
        { id: 0, label: 'Ups, something is wrong', parentId: 0, children: [] },
      ])
    );
  }
}

export function* watchGetData(): SagaIterator<void> {
  yield takeLatest(getDataAsync.type, getDataWorker);
}
