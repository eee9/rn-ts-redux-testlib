import {combineReducers} from 'redux';

import {counterReducer} from './counterReducer';
import {IState as CounterState} from '../types/counterTypes';
import {todoReducer} from './todoReducer';
import {IState as TodoState} from '../types/todoTypes';

// Combined State
export interface IStateCombined {
  counterReducer: CounterState;
  todoReducer: TodoState;
}

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});
export default rootReducer;
