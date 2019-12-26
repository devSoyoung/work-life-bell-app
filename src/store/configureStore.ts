import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';

import createRootReducer from './createRootReducer';
import createRootSaga from './createRootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const sagaMiddleware = createSagaMiddleware();

type InitialState = {

};

export default (initialState: InitialState) => {
  const middleWares = [sagaMiddleware];

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(),
  );

  const enhancers = [applyMiddleware(...middleWares)];

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  const persistor = persistStore(store);

  // Extensions
  sagaMiddleware.run(createRootSaga);

  return {
    store,
    persistor,
  };
};
