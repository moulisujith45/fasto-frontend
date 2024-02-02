import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'
import cartReducer from '../reducers/cartReducer'
import addressReducer from '../reducers/addressReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer,
        cart :cartReducer,
        address: addressReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore