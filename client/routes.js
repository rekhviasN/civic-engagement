import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

// import ReqContainer from './containers/ReqContainer'
import Req from './src/req';
import Counter from './containers/counter2';
import LocationBar from './components/locationBar';

const home = function home() {
  return (<div>
    <h1>welcome to the home ppage!</h1>
    <Link to="/counter">Counter</Link>
    <br />
    <Link to="/req">Go to request</Link>
    <br />
    <Link to="/location">Rep Lookup</Link>
  </div>);
};

export default (
  <Route path="/">
    <IndexRoute component={home} />
    <Route path="req" component={Req} />
    <Route path="counter" component={Counter} />
    <Route path="location" component={LocationBar} />
  </Route>
);
