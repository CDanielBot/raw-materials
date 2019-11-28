import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allStoreEnchancers = composeEnhancers(
    applyMiddleware(thunk),
)

export default function configureStore(initialState) {
    const rootReducer = combineReducers(reducers)

    return createStore(
        rootReducer,
        initialState,
        allStoreEnchancers
    )
}