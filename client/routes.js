import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

// import ReqContainer from './containers/ReqContainer'
import Req from './containers/reqContainer';
import Counter from './containers/counter2';
import MapContainer from './containers/GoogleMapContainer';

const home = function home() {
  return (<div>
    <h1>welcome to the home ppage!</h1>
    <Link to="/req">Go to request</Link>
    <br />
    <Link to="map">Google Map</Link>
  </div>);
};

export default (
  <Route path="/">
    <IndexRoute component={home} />
    <Route path="req" component={Req} />
    <Route path="counter" component={Counter} />
    <Route path="map" component={MapContainer} />
  </Route>
);
