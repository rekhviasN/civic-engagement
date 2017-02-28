import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import politicianSearchReducer from './politicianSearchReducer';
import meetupReducer from './meetupSearchReducer';
import meetupMapReducer from './meetupMapReducer';
import setLogin from './setLogin';

const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: politicianSearchReducer,
  Meetup: meetupReducer,
  MeetupMap: meetupMapReducer,
  LoggedIn: setLogin
});

export default rootReducer;
