import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import politicianSearchReducer from './politicianSearchReducer';


const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: politicianSearchReducer
});

export default rootReducer;
