import React from 'react';
import ReduxPromise from 'redux-promise';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

// import Routes from './routes';
// import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(Reducers);

// import { createStore } from 'redux';
// import CounterApp from './reducers/counter2';
// import counter from './containers/counter2';
// import locationBar from './components/locationBar';
// import req from './src/req';
// import resultsComp from './containers/reqContainer';
// import reducer from './reducers/locBarReducer';

// const store = createStore(reducer);


const meow = function meow() {
  return (<div>
    <h1>welcome to meow!!</h1>
    <Link to="/">home</Link>
  </div>);
};

// const home = function home() {
//   return (<div>
//     <h1>welcome to the home ppage!</h1>
//     <Link to="/counter">Counter</Link>
//     <br />
//     <Link to="/req">Go to request</Link>
//     <br />
//     <Link to="/location">Rep Lookup</Link>
//   </div>);
// };

render((
  <Provider store={store}>
//     <Router history={browserHistory} routes={Routes} />
//   </Provider>),
//   document.getElementById('root')
// );

    <Router history={browserHistory} >
      <Route path="/" component={resultsComp} />
      <Route path="/req" component={req} />
      <Route path="/counter" component={counter} />
      <Route path="/location" component={locationBar} />
    </Router>
  </Provider>), document.getElementById('root'));
