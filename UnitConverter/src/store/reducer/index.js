import { combineReducers } from 'redux';
import group from './group';
import from from './from';
import to from './to';
import value from './value';

const reducer = combineReducers({
  group,
  from,
  to,
  value,
});

export default reducer;
