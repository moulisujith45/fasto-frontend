import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startGetUserCart ,startAddCart, StartRemoveCart, StartIncQuantity, StartDecQuantity} from "../../actions/cartAction";
import { startGetProduct } from "../../actions/productAction";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
    const cart = useSelector((state) => state.cart.data)
    const products = useSelector((state) => state.product)
    const [cartItems,setCartItems] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeCart = (productId) => {
        dispatch(StartRemoveCart(productId))
    }

    const addToCart = (productId) => {
        dispatch(startAddCart(productId))
    }

    const handleProceed = () => {
        navigate('/display-address')
    }

    useEffect(() => {
        dispatch(startGetUserCart());
        dispatch(startGetProduct());
    }, [dispatch]);

    const  incrementQuantity = (productId) =>{
        dispatch(StartIncQuantity(productId))
    }
    const decrementQuantity = (productId) => {
        dispatch(StartDecQuantity(productId))
    }
    

    return (
        <div className="cart-container">
            <div className="cart-items">
                <div>
                    <button type="button" className="btn btn-outline-primary" onClick={handleProceed}>Proceed</button>
                </div>
                {cart.map((item, index) => {
                    const product = products.find((product) => product._id === item.productId);
                    if (!product) {
                        return <div key={index}>Product not found</div>;
                    }
                    return (
                        <div key={index} className="cart-item">
                            <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} />
                            <div className="item-details">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button onClick={() => incrementQuantity(item.productId)}>+1</button>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => decrementQuantity(item.productId)}>-1</button>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
