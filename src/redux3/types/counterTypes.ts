export enum actionTypes {
  RESET = 'RESET',
  INC = 'INC',
  DEC = 'DEC',
  INCX = 'INCX',
  DECX = 'DECX',
  SET = 'SET',
}

export interface IState {
  counter: number;
}

export interface IAction {
  type: actionTypes;
  payload?: number;
}
