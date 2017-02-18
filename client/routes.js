import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

// import ReqContainer from './containers/ReqContainer'
import Req from './src/req';
import Counter from './containers/counter2';
<<<<<<< HEAD
import MapContainer from './containers/GoogleMapContainer';
=======
import LocationBar from './components/locationBar';
import MenuContainer from './containers/sidebarContainer';
>>>>>>> sidebar

const home = function home() {
  return (<div>
    <h1>welcome to the home ppage!</h1>
    <Link to="/counter">Counter</Link>
    <br />
    <Link to="/req">Go to request</Link>
    <br />
<<<<<<< HEAD
    <Link to="/map">Google Map</Link>
=======
    <Link to="/location">Rep Lookup</Link>
    <br />
    <Link to="/menuAnd">Menu with other stuff </Link>
>>>>>>> sidebar
  </div>);
};

export default (
  <Route path="/">
    <IndexRoute component={home} />
    <Route path="req" component={Req} />
    <Route path="counter" component={Counter} />
<<<<<<< HEAD
    <Route path="map" component={MapContainer} />
=======
    <Route path="location" component={LocationBar} />
    <Route path="menuAnd" component={MenuContainer}/>
>>>>>>> sidebar
  </Route>
);
