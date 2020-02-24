/**
 * @format
 */

import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware  from "redux-promise";

const middlewares = [
    thunkMiddleware, 
    promiseMiddleware    
];



import reducers from './src/iRedux/Reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const appRedux = () => (
    <Provider store={myStore}>
        <App />
    </Provider>
);



// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => appRedux);
