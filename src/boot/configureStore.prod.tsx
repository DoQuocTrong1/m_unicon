import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducers/rootReducers';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../middleware/api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk, api));

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return {store, persistor};
}
