import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import politicianSearchReducer from './politicianSearchReducer';
import meetupReducer from './meetupSearchReducer';
import meetupMapReducer from './meetupMapReducer';

const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: politicianSearchReducer,
  Meetup: meetupReducer,
  MeetupMap: meetupMapReducer
});

export default rootReducer;
