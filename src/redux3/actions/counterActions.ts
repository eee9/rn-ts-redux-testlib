import * as Reducer from '../types/counterTypes';

export interface IState extends Reducer.IState {}

export const reset = (): Reducer.IAction => ({
  type: Reducer.actionTypes.RESET,
});

export const inc = (): Reducer.IAction => ({
  type: Reducer.actionTypes.INC,
});

export const dec = (): Reducer.IAction => ({
  type: Reducer.actionTypes.DEC,
});

export const inc10 = (): Reducer.IAction => ({
  type: Reducer.actionTypes.INCX,
});

export const dec10 = (): Reducer.IAction => ({
  type: Reducer.actionTypes.DECX,
});

export const setValue = (value: number): Reducer.IAction => ({
  type: Reducer.actionTypes.SET,
  payload: value,
});
