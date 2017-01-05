import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducer';

const store = createStore(reducer, autoRehydrate());

persistStore(store, { storage: AsyncStorage });

export default store;
