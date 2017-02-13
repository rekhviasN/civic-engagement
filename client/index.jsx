import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import Counter from './components/counter';
import req from './src/req'

const meow = function meow() {
  return (<div>
    <h1>welcome to meow!!</h1>
    <Link to="/">home</Link>
  </div>);
};

const home = function home() {
  return (<div>
    <h1>welcome to the home ppage!</h1>
    <Link to="/meow">Meow</Link>
  </div>);
};

console.log('yo');

render((<Router history={browserHistory} >
  <Route path="/" component={home} />
  <Route path="/meow" component={req} />
</Router>), document.getElementById('root'));
