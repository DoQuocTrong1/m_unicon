import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducers/rootReducers';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../middleware/api';
import {createLogger} from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(
      require('redux-immutable-state-invariant').default(),
      thunk,
      api,
      createLogger(),
    ),
  );

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return {store, persistor};
}
