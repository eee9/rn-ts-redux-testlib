/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store, storePersist} from '../src/redux3/store';
import * as ActionTodo from '../src/redux3/actions/todoActions';
import Example4 from '../src/Example4';

describe('2 tests here.', () => {
  test('Just 2 + 2 = 4', () => {
    expect(2 + 2).toEqual(4);
  });

  test('Example3 test for Counter in Redux', async () => {
    const todo1 = 'New todo added';
    storePersist.dispatch(ActionTodo.add(todo1));
    const todosState = storePersist.getState().todoReducer.todos;
    expect(todosState.length).toEqual(4);
    expect(todosState).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          text: todo1,
          date: expect.any(Date),
        }),
      ]),
    );
    expect(todosState).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          text: 'Item 1',
          date: expect.any(Date),
        }),
      ]),
    );
    const counter = storePersist.getState().counterReducer.counter;
    const COUNTER_NOW = 34;
    expect(counter).toEqual(COUNTER_NOW);
    const component = (
      <Provider store={storePersist}>
        <Example4 />;
      </Provider>
    );
    const {getByTestId} = render(component);
    expect(getByTestId('counter').props.children).toBe(COUNTER_NOW);
  });
});
