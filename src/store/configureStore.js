import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore