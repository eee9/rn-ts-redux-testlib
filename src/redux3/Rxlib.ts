import {store} from './store';
import * as counterActions from './actions/counterActions';
import * as todoActions from './actions/todoActions';

export const getStore = () => store.getState();

// counterActions
export const inc = () => {
  return store.dispatch(counterActions.inc());
};

// todoActions
export const empty = () => {
  return store.dispatch(todoActions.clear());
};
