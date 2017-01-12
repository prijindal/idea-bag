import { combineReducers } from 'redux';
import email from './email';
import contacts from './contacts';
import loading from './loading';

const reducer = combineReducers({
  loading,
  contacts,
  email,
});

export default reducer;
