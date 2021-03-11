import {IState, IAction, actionTypes, TodoItem} from '../types/todoTypes';

let item: TodoItem = {
  id: 1,
  text: 'Item 1',
  date: new Date(),
};
const initialState: IState = {
  last_id: 0,
  todos: [item, item, item],
};

export const todoReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.CLEAR: {
      return initialState;
    }
    case actionTypes.ADD: {
      let _newState = state;
      const newToDo: string | undefined = action.payload?.text;
      if (newToDo) {
        let _newItem: TodoItem = {
          id: state.last_id + 1, // id must be unique. Symbol() can be used here.
          text: newToDo,
          date: new Date(),
        };
        _newState = {last_id: _newItem.id, todos: [...state.todos, _newItem]};
      }
      return _newState;
    }
    case actionTypes.DELETE:
      let _newTodos: TodoItem[] = state.todos;
      const deleteID: Number = action.payload?.id || 0;
      if (deleteID > 0) {
        _newTodos = _newTodos.filter((todo: TodoItem) => todo.id !== deleteID);
      }
      return {last_id: state.last_id, todos: _newTodos};
    default: {
      return state;
    }
  }
};
