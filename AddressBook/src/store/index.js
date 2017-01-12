import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducer';

const enhancer = compose(
  autoRehydrate(),
);

const store = createStore(reducer, undefined, enhancer);

async function getContacts() {
  let contacts = await AsyncStorage.getItem('contacts');
  if (contacts !== null) {
    contacts = JSON.parse(contacts);
    store.dispatch({
      type: 'CONTACTS/SET',
      contacts,
    });
  }
}

persistStore(store, { blacklist: ['contacts'], storage: AsyncStorage }, (err, state) => {
  store.dispatch({
    type: 'LOADING/OFF',
  });
  getContacts();
});

export default store;
