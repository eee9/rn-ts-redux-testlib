/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store, storePersist} from './redux3/store';

const Example4 = () => {
  const _counter: number = storePersist.getState().counterReducer.counter;
  const _todo_size: number = storePersist.getState().todoReducer.todos.length;
  return (
    <Provider store={storePersist}>
      <View style={styles.ViewSt}>
        <Text style={styles.TextSt}>r01, L3B. Example4 for Redux3 tests</Text>
        <Text style={styles.TextSt}>
          counter ={' '}
          <Text style={styles.CounterSt} testID="counter">
            {_counter}
          </Text>
        </Text>
        <Text style={styles.TextSt}>
          todos size ={' '}
          <Text style={styles.CounterSt} testID="size">
            {_todo_size}
          </Text>
        </Text>
      </View>
    </Provider>
  );
};
export default Example4;

const styles = StyleSheet.create({
  ViewSt: {
    flex: 1,
    margin: 0,
    padding: 10,
    backgroundColor: 'cyan',
    borderColor: 'yellow',
    borderWidth: 2,
  },
  TextSt: {
    marginTop: 10,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  CounterSt: {
    color: 'red',
  },
});
