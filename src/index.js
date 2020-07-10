import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers, compose } from 'redux';
import App from './containers/App';
import { searchRobots,requestRobots } from './reducer';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
const logger = createLogger();
const rootReducers = combineReducers({ searchRobots, requestRobots});

const store = createStore(
    rootReducers,
    compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));



ReactDOM.render(
    <Provider store={store} >
        <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
