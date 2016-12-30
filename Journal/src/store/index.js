import { createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducer';

const store = createStore(reducer, undefined, autoRehydrate());

persistStore(store, { storage: AsyncStorage }, (err, state) => {
  store.dispatch({
    type: 'LOADING/OFF',
  });
});

export default store;
