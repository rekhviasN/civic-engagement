import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import newsSearchReducer from './politicianSearchReducer';
import propublicaReducer from './propublicaReducer';
import meetupReducer from './meetupSearchReducer';
import meetupMapReducer from './meetupMapReducer';
import setLogin from './setLogin';
import setDefaultLocation from './setDefaultLocation';


const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: newsSearchReducer,
  Propublica: propublicaReducer,
  Meetup: meetupReducer,
  MeetupMap: meetupMapReducer,
  LoggedIn: setLogin,
  DefaultLoc: setDefaultLocation
});

export default rootReducer;
