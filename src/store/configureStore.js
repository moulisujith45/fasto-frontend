import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'
import cartReducer from '../reducers/cartReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer,
        cart :cartReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore