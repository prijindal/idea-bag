import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducer';
import firebase from './firebase';

const enhancer = compose(
  applyMiddleware(firebase),
  autoRehydrate(),
);

const store = createStore(reducer, undefined, enhancer);

persistStore(store, { storage: AsyncStorage }, (err, state) => {
  store.dispatch({
    type: 'LOADING/OFF',
  });
});

export default store;
