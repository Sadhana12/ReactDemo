import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import strReducer from './reducer/strreducer'

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(strReducer, applyMiddleware(sagaMiddleware));

export default store;