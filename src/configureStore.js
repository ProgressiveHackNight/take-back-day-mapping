import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

import initialGlobalState from './transformers/toGlobalState';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialGlobalState(initialState),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  );
}
