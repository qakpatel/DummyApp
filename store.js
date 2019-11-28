import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './RootReducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    RootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);

sagaMiddleware.run(rootSaga);
export default store;