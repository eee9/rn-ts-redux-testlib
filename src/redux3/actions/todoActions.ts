import * as Reducer from '../types/todoTypes';

export interface IState extends Reducer.IState {}

export const clear = (): Reducer.IAction => ({
  type: Reducer.actionTypes.CLEAR,
});

export const add = (text: string): Reducer.IAction => ({
  type: Reducer.actionTypes.ADD,
  payload: {
    text,
  },
});

export const deleteID = (id: number): Reducer.IAction => ({
  type: Reducer.actionTypes.DELETE,
  payload: {
    id,
  },
});
