import { reducer } from './reducer'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;