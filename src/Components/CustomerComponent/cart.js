


// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { StartRemoveCart , startAddCart,startGetUserCart } from "../../actions/cartAction";
// import { startGetProduct } from "../../actions/productAction";
// import { Navigate } from "react-router-dom";

// const Cart = () => {
//     const cart = useSelector((state) => state.cart.data)
//     const products = useSelector((state) => state.product)
//     console.log(products,'products12')
//     const [cartItems,setCartItems] = useState([])
//     const dispatch = useDispatch()

//     useEffect(() => {
//         // console.log('check')
//         dispatch(startGetUserCart())
//         // dispatch(startGetProduct())
//     }, [dispatch])

//     const handleProceed = () => {
//         Navigate('')
//     }
//     console.log(cart)
//     return(
//         <div className="cart-container">
//             <div className="cart-items">
//                 <div>
//                 <button type="button" class="btn btn-outline-primary" onClick={handleProceed}>Proceed</button>
//                 </div>
//                 {cart.products?.map((item) => {
//                     const product = products.find((product) => product._id === item.productId)
//                     if(!product){
//                         return <div>product not found</div>
//                     }
//                     return (
//                         <div className="cart-item">
//                             <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} />
//                             <div className="item-details">
//                                 <h3>{product.name}</h3>
//                                 <p>${product.price}</p>
//                                 <p>Quantity: {item.quantity}</p>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { startGetUserCart ,startAddCart, StartRemoveCart} from "../../actions/cartAction";
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

    const handleProceed = () => {
        Navigate('')
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
                                <button onClick={() => incrementQuantity(product._id)}>+1</button>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => decrementQuantity(product._id)}>-1</button>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
