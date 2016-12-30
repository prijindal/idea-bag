import { combineReducers } from 'redux';
import email from './email';
import journals from './journals';
import loading from './loading';

const reducer = combineReducers({
  loading,
  email,
  journals,
});

export default reducer;
