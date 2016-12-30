import firebase from 'firebase';
import md5 from 'md5';

firebase.initializeApp({
  apiKey: 'AIzaSyAJYBVUu0WBL6cDj-lmCM14UUWsMPAxUeM',
  authDomain: 'idea-bag-1482411280626.firebaseapp.com',
  databaseURL: 'https://idea-bag-1482411280626.firebaseio.com/',
});

const database = firebase.database();

let ref;
let storedJournals;

const initRef = (email) => {
  if (!ref) {
    ref = database.ref(`/journals/${email}`);
    ref.on('value', (snapshot) => {
      storedJournals = snapshot.val() || [];
    });
  }
};

function middleware({ getState }) {
  return next => (action) => {
    let returnValue = next(action);
    let { email, journals } = getState();
    console.log(email);
    if (email) {
      email = md5(email);
      let updates = {};
      initRef(email);
      if (storedJournals) {
        updates[email] = journals;
        database.ref('/journals/').update(updates);
      }
    }
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return Object.assign({}, returnValue, {
      journals: storedJournals || journals,
    });
  };
}

export default middleware;
