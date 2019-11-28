import { all, fork} from 'redux-saga/effects';
import { watchPostUserData } from './sagas/Formsaga';
import { watchGetUserData ,watchSearchData} from './sagas/Listsaga';

export function* rootSaga () {
  yield all([
    fork(watchPostUserData),
    fork(watchGetUserData),
    fork(watchSearchData)
  ]);
};