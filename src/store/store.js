import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
