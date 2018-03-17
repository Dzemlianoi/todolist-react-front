import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'
import { getReducersHotModuleReplacement } from '../utils/hot_module'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware());

export function prepareStore(initialState = {}) {
  return createStore(reducers, {}, enhancer)
}

getReducersHotModuleReplacement()
