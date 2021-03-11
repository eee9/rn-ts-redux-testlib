import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers/index';

const persistConfig = {
  key: 'MxAppL34',
  storage: AsyncStorage,
  //whitelist: ['counterReducer'],
  blacklist: ['counterReducer', 'todoReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const storePersist = createStore(persistedReducer);
export const persistor = () => persistStore(storePersist);

export const store = createStore(rootReducer);
