import { combineReducers } from 'redux';

import counterReducer from './counter';
import counter2Reducer from './counter2';
import locBarReducer from './locBarReducer';

const rootReducer = combineReducers({
  locBar: locBarReducer,
  counter: counterReducer,
  counter2: counter2Reducer
});

export default rootReducer;
