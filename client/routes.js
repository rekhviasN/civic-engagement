import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

// import ReqContainer from './containers/ReqContainer'
import Req from './containers/reqContainer';
import MapContainer from './containers/GoogleMapContainer-v2';

const home = function home() {
  return (<div>
    <h1>welcome to the home page!</h1>
    <Link to="/req">Go to request</Link>
    <br />
    <Link to="map">Google Map</Link>
  </div>);
};

export default (
  <Route path="/">
    <IndexRoute component={home} />
    <Route path="req" component={Req} />
    <Route path="map" component={MapContainer} />
  </Route>
);
