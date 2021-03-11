import {IState, IAction, actionTypes} from '../types/counterTypes';

const initialState: IState = {
  counter: 34,
};

export const counterReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.RESET: {
      return initialState;
    }
    case actionTypes.INC: {
      return {...state, counter: state.counter + 1};
    }
    case actionTypes.DEC: {
      const new_counter = state.counter <= 1 ? 0 : state.counter - 1;
      return {...state, counter: new_counter};
    }
    case actionTypes.INCX: {
      return {...state, counter: state.counter + 10};
    }
    case actionTypes.DECX: {
      const new_counter = state.counter <= 10 ? 0 : state.counter - 10;
      return {...state, counter: new_counter};
    }
    case actionTypes.SET: {
      return {...state, counter: action.payload || initialState.counter};
    }
    default: {
      return state;
    }
  }
};
