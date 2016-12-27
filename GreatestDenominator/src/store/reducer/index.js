import { combineReducers } from 'redux';
import input1 from './input1';
import input2 from './input2';

const reducer = combineReducers({
  input1,
  input2,
});

export default reducer;
