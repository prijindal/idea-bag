import { combineReducers } from 'redux';
import directory from './directory';
import sortby from './sortby';

const reducer = combineReducers({
  directory,
  sortby,
});

export default reducer;
