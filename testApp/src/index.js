import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux';
//import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/reducer';
import strReducer from './reducer/strreducer'
import mySaga from './saga/sagas';
import {store, sagaMiddleware} from './store';


//const sagaMiddleware = createSagaMiddleware();

//const store = createStore(strReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
