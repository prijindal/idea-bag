import { combineReducers } from 'redux';
import amount from './amount';
import cost from './cost';

const reducer = combineReducers({
  amount,
  cost,
});

export default reducer;
