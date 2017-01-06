import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducer';

const enhancer = compose(
  autoRehydrate(),
);

const store = createStore(reducer, undefined, enhancer);

persistStore(store, { storage: AsyncStorage }, (err, state) => {
  store.dispatch({
    type: 'LOADING/OFF',
  });
});

export default store;
