export enum actionTypes {
  CLEAR = 'CLEAR',
  ADD = 'ADD',
  DELETE = 'DELETE',
}

export interface TodoItem {
  id: number;
  text: string;
  date: Date;
}

export interface IState {
  last_id: number;
  todos: TodoItem[];
}

export interface IAction {
  type: actionTypes;
  payload?: {
    id?: number; // for DELETE
    text?: string; // for ADD
  };
}
