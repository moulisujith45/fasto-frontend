import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetProduct } from "../actions/productAction";
import { startAddCart, StartRemoveCart, StartDecQuantity , StartIncQuantity } from "../actions/cartAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { startGetUserCart } from "../actions/cartAction";

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart.data); 
    console.log(cart)
    const [addedProducts, setAddedProducts] = useState({}); // State to track added products and their quantities

    useEffect(() => {
        dispatch(startGetUserCart());
    }, [dispatch])

    const incrementQuantity = (id) => {
        dispatch(StartIncQuantity(id));
    };

    const decrementQuantity = (id) => {
        dispatch(StartDecQuantity(id))
    };

    const addToCart = (product) => {
        const productId = product._id;
        const cartProducts = cart; 
        // console.log(cart,"see")
        const isProductInCart = cartProducts?.some(item => item.productId === productId); 
        if (isProductInCart) {
            console.log('home working')
            incrementQuantity(productId);
        } else {
            console.log("Home notworking")
            dispatch(startAddCart({ productId, quantity: 1, price: product.price }));
        }
        toast.success(' item added to cart!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const increment = (product) => {
        const productId = product._id
        incrementQuantity(productId)
    }
    const itemInCart = (product) => {
        return !!cart.find(ele => ele.productId == product._id ) 
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product._id} className="card card-product" style={{ maxWidth: '390px' }}>
                    <div className="card-body">
                        <div className="text-center position-relative">
                            <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} className="mb-3 img-fluid" />
                        </div>
                        <h2 className="fs-6">
                            <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
                        </h2>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <span className="text-dark">${product.price}</span>
                            </div>

                            {
                            itemInCart(product) ? (
                            <>
                             <button onClick={() => increment(product)}>+</button><button>-</button>
                            </>
                            ) : (
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                            )
                        }

                               
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


