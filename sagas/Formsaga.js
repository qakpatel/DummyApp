import { delay, takeLatest, put } from 'redux-saga/effects';

function* postUserData(data) {
  try {
    yield delay(4000);
    yield put({
      type: 'POST_USER_DATA',
      payload: data,
    });
  }
  catch (error) {
    console.log(error);
  }
};

export function* watchPostUserData() {
  yield takeLatest('POST_USER', postUserData);
};
