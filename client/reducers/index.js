import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import newsSearchReducer from './politicianSearchReducer';
// import politicianSearchReducer from './politicianSearchReducer'; // this is an awful name
import propublicaReducer from './propublicaReducer';
import meetupReducer from './meetupSearchReducer';
import meetupMapReducer from './meetupMapReducer';


const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: newsSearchReducer,
  // News: politicianSearchReducer, // ugh this name is so bad
  Propublica: propublicaReducer,
  Meetup: meetupReducer,
  MeetupMap: meetupMapReducer
});

export default rootReducer;
