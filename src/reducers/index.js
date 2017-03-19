import { combineReducers } from 'redux';
import data from './data';
import Routes from '../containers/Router/Routes';

const reducer = combineReducers({
  data,
  nav: (state, action) => (
    Routes.router.getStateForAction(action, state)
  ),
});

export default reducer;
