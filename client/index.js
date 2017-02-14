import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Counter from './components/counter'; // import the component
import reducers from './reducers/counter';  // import reducers => later change to the rootreducer

import req from './src/req'

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
    <Link to="/meow">Meow</Link><br />
    <Link to="/counter">Counter</Link><br />
    <Link to="/req">req</Link>
  </div>);
};

console.log('yo');

render(
  (
    <Provider store = { store }>
      <Router history={browserHistory} >
        <Route path="/" component={home} />
        <Route path="/meow" component={meow} />
        <Route path="/req" component={req} />
        <Route path="/counter" component={Counter} />
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
