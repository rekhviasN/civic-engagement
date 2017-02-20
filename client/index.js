import React from 'react';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import routes from './routes';
import './style/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(ReduxPromise, logger)
  )
);
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>), document.getElementById('root'));
