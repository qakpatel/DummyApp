import { delay, takeLatest, put } from 'redux-saga/effects';
import Service from './../Service/MainService';

function* getUserData() {
  try {
    yield delay(4000);
    yield put({
      type: 'GET_USER_DATA',
    });
  }
  catch (error) {
    console.log(error);
  }
};

function* searchData(key){
    try{
        yield delay(4000);
        yield put({
        type:'SEARCH_DATA',
        payload:key
    })
    }catch(error){
      console.log(error)
    }
}

export function* watchGetUserData() {
  yield takeLatest('GET_USER', getUserData);
};

export function* watchSearchData(){
    yield takeLatest('SEARCH',searchData)
}
