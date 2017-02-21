import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import headerIconsReducer from './headerIconsReducer';
import politicianSearchReducer from './politicianSearchReducer';

const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: politicianSearchReducer
});

export default rootReducer;
