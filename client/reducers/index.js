import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import headerIconsReducer from './headerIconsReducer';

const rootReducer = combineReducers({
  GoogleResults: locBarReducer
});

export default rootReducer;
