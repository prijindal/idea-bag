/* @flow */
/* global window: 0 */
import { createStore } from 'redux';
import reducer from './reducers';

export default function configureStore(onCompletion:()=>void):any {
  const store = createStore(reducer);
  onCompletion();
  return store;
}
