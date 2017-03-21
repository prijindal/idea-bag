/* @flow */
/* global window: 0 */
import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import RNFS from 'react-native-fs';
import reducer from './reducers';

export default function configureStore(onCompletion:()=>void):any {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    // const createLogger = require('redux-logger'); // eslint-disable-line global-require
    // const logger = createLogger();
    // middlewares.push(logger);
  }
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, (err, stored) => {
    if (!stored.data || stored.data.length === 0) {
      RNFS.readFileAssets('data/output.json')
      .then((result) => {
        store.dispatch({
          type: 'DATA/INIT',
          data: JSON.parse(result),
        });
        onCompletion();
      });
    } else {
      onCompletion();
    }
  });

  return store;
}
