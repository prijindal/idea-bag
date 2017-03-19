import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import RNFS from 'react-native-fs';
import reducer from './reducer';

const enhancer = compose(
  autoRehydrate(),
);

const store = createStore(reducer, undefined, enhancer);

persistStore(store, { storage: AsyncStorage }, (err, stored) => {
  if (!stored.data || stored.data.length === 0) {
    RNFS.readFileAssets('data/output.json')
    .then(result =>
      store.dispatch({
        type: 'DATA/INIT',
        data: JSON.parse(result),
      }),
    );
  }
});

export default store;
