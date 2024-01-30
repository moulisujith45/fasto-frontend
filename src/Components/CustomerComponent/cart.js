import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StartRemoveCart , startAddCart } from "../../actions/cartAction";
const Cart = (props) => {
    const cart = useSelector((state) => state.cart)
    const [cartItems,setCartItems] = ([])
    const dispatch = useDispatch()
  const removeCart = (productId) => {
    dispatch(StartRemoveCart(productId))
  }
  const addToCart = (productId) => {
    dispatch(startAddCart(productId))
  }
    const incrementItemQuantity = (product) => {
        setCartItems(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    }
    const decrementItemQuantity = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct.quantity === 1) {
            setCartItems(cart.filter(item => item.id !== product.id));
        } else {
            setCartItems(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
        }
    }
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    useEffect(() => {
        console.log('Cart items: ', cart);
    }, [cart])
    return(
        <div className="cart-container">
        <div className="cart-items">
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={`http://localhost:3040/images/${item.image}`} alt={item.name} />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <div className="quantity-controls">
                            <button onClick={() => decrementItemQuantity(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => incrementItemQuantity(item)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="cart-summary">
            <h2>Total Amount: ${totalAmount}</h2>
            <h2>Total Items: {totalItems}</h2>
        </div>
    </div>
    );
};
export default Cart;


