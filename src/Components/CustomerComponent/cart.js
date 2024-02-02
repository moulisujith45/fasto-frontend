// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { StartRemoveCart , startAddCart,startGetUserCart } from "../../actions/cartAction";
// import { startGetProduct } from "../../actions/productAction";
// const Cart = () => {
//     const cart = useSelector((state) => state.cart.data)
//     const products = useSelector((state) => state.product)
//     const [cartItems,setCartItems] = useState([])
//     const dispatch = useDispatch()
//   const removeCart = (productId) => {
//     dispatch(StartRemoveCart(productId))
//   }
//   const addToCart = (productId) => {
//     dispatch(startAddCart(productId))
//   }
//     // const incrementItemQuantity = (product) => {
//     //     setCartItems(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//     // }
//     // const decrementItemQuantity = (product) => {
//     //     const existingProduct = cart.find(item => item.id === product.id);
//     //     if (existingProduct.quantity === 1) {
//     //         setCartItems(cart.filter(item => item.id !== product.id));
//     //     } else {
//     //         setCartItems(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
//     //     }
//     // }
//     // const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     // const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
//         useEffect(() => {
//             dispatch(startGetUserCart());
//             dispatch(startGetProduct)
//         }, [dispatch])
//         console.log(cart[0]?.products,"hiii")
//         // console.log(cart.product,'hello')
//     return(
//         <div className="cart-container">
//         <div className="cart-items">
//             {cart[0]?.products.map((item) => (
//                 <div className="cart-item">
//                     <img src={`http://localhost:3040/images/${item.image}`} alt={item.name} />
//                     <div className="item-details">
//                         <h3>{item.name}</h3>
//                         <p>${item.price}</p>
//                         {/* <div className="quantity-controls">
//                             <button onClick={() => decrementItemQuantity(item)}>-</button>
//                             <span>{item.quantity}</span>
//                             <button onClick={() => incrementItemQuantity(item)}>+</button>
//                         </div> */}
//                     </div>
//                 </div>
//             ))}
//         </div>
//         {/* <div className="cart-summary">
//             <h2>Total Amount: ${totalAmount}</h2>
//             <h2>Total Items: {totalItems}</h2>
//         </div> */}
//     </div>
//     );
// };
// export default Cart;


// // import { useSelector } from "react-redux";
// // const Cart = ({productId}) => {
// //     const products = useSelector((state) => state.products)
// //     const product = products.find((product) =>
// //     product._id === productId)
// //     if(!product){
// //         return <div>product not found</div>
// //     }

// // return(
// //     <div>
// //         <h2>{product.name}</h2>
// //         <p>{product.price}</p>
// //         <img scr = {`http://localhost:3040/images/${product.image}`} alt = {product.name} />
// //     </div>

// // )}

// // export default Cart



import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StartRemoveCart , startAddCart,startGetUserCart } from "../../actions/cartAction";
import { startGetProduct } from "../../actions/productAction";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.data)
    const products = useSelector((state) => state.product)
    const [cartItems,setCartItems] = useState([])
    const dispatch = useDispatch()

    const removeCart = (productId) => {
        dispatch(StartRemoveCart(productId))
    }

    const addToCart = (productId) => {
        dispatch(startAddCart(productId))
    }

    useEffect(() => {
        dispatch(startGetUserCart());
        dispatch(startGetProduct())
    }, [dispatch])

    const handleProceed = () => {
       navigate('/display-address')
    }

    return(
        <div className="cart-container">
            <div className="cart-items">
                <div>
                <button type="button" class="btn btn-outline-primary" onClick={handleProceed}>Proceed</button>
                </div>
                {cart[0]?.products.map((item) => {
                    const product = products.find((product) => product._id === item.productId)
                    if(!product){
                        return <div>product not found</div>
                    }
                    return (
                        <div className="cart-item">
                            <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} />
                            <div className="item-details">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Cart;
