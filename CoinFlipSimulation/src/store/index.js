import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import devToolsEnhancer from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducer';

const store = createStore(reducer, devToolsEnhancer(), autoRehydrate());

persistStore(store, { storage: AsyncStorage });

export default store;
