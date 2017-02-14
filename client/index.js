import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
// import Routes from './routes';
import { createStore } from 'redux';
// import ReduxPromise from 'redux-promise';
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
import CounterApp from './reducers/counter2';
// const store = createStore(CounterApp);
import reducers from './reducers/counter';

import counter from './containers/counter2';
import req from './src/req';

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
//
// import Counter from './components/counter'; // import the component
// import reducers from './reducers/counter';  // import reducers => later change to the rootreducer
//
// import req from './src/req'

// import { Provider } from 'react-redux';
// import Routes from './routes';
// import { createStore } from 'redux';
// import ReduxPromise from 'redux-promise';
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// import CounterApp from './reducers/counter2';
// const store = createStore(CounterApp);
// import reducers from './reducers/counter';

// import counter from './containers/counter2';
// import req from './src/req';

const store = createStore(reducers);  // create the redux store and pass in your reducer(s)

const meow = function meow() {
  return (<div>
    <h1>welcome to meow!!</h1>
    <Link to="/">home</Link>
  </div>);
};

const home = function home() {
  return (<div>
    <h1>welcome to the home ppage!</h1>
    <Link to="/counter">Counter</Link>
    <br />
    <Link to="/req">Go to request</Link>
  </div>);
};

render((
  <Provider store = {store}>
    <Router history={browserHistory} >
    <Route path="/" component={home} />
    <Route path="/req" component={req} />
    <Route path="/counter" component={counter} />
    </Router>
  </Provider>), document.getElementById('root'));
