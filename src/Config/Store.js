import { applyMiddleware, createStore, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import {
  defaultState,
  rootReducer } from './Reducer';
import { Platform } from 'react-native';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// import { NODE_ENV } from 'react-native-dotenv';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS,
  });
}

const persistConfig = {
  key: "elinatools",
  timeout: 5000,
  storage,
};

const composeStore = composeEnhancers(applyMiddleware());

const store = createStore(
  persistReducer(persistConfig,
    rootReducer
    ),
  defaultState,
  composeStore,
  // NODE_ENV === 'production' ? undefined : composeStore,
);

const persistor = persistStore(store);

export {
  persistor,
  store
};
