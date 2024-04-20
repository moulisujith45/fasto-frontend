import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'
import cartReducer from '../reducers/cartReducer'
import addressReducer from '../reducers/addressReducer'
import orderReducer from '../reducers/orderReducer'
import deliveryReducer from '../reducers/deliveryReducer'
import { Pagination } from 'reactstrap'
import sort from '../reducers/sortsearchReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer,
        cart :cartReducer,
        address: addressReducer,
        order : orderReducer,
        delivery : deliveryReducer,
        pagination:sort
        

    }), applyMiddleware(thunk))
    return store
}

export default configureStore