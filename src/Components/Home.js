import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetProduct } from "../actions/productAction";
import { startAddCart, StartRemoveCart, StartDecQuantity, StartIncQuantity } from "../actions/cartAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { startGetUserCart } from "../actions/cartAction";

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart.data);
    useEffect(() => {
        dispatch(startGetUserCart());
    }, [dispatch]);
    const incrementQuantity = (id) => {
        dispatch(StartIncQuantity(id));
    };

    const decrementQuantity = (id) => {
        dispatch(StartDecQuantity(id));
    };

    const addToCart = (product) => {
        const productId = product._id;
        const cartProducts = cart;
        const isProductInCart = cartProducts?.some(item => item.productId === productId);
        if (isProductInCart) {
            incrementQuantity(productId);
        } else {
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

    const decrement = (product) => {
        const productId = product._id;
        const item = cart.find(ele => ele.productId === productId);
        if (item && item.quantity > 1) {
            decrementQuantity(productId);
        }
    }

    const itemInCart = (product) => {
        return !!cart.find(ele => ele.productId === product._id)
    }

    const getItemQuantity = (productId) => {
        const item = cart.find(ele => ele.productId === productId);
        return item ? item.quantity : 0;
    }

    return (
        <div>
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {products.map((product) => (
                <div key={product._id} className="col d-flex" style={{ maxWidth: '390px' }}>
                     <div className="card card-product flex-grow-1" style={{ maxWidth: '390px' }}>
                        <div className="card-body ">
                            <div className="text-center position-relative">
                            <img src={`http://localhost:3040/images/${product.image}`} style={{width:"180px",height:"120px"}} alt={product.name} className="mb-3 img-fluid" />
                            </div>
                        <h2 className="fs-6">
                        <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
                        </h2>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                <span className="text-dark">${product.price}</span>
                                </div>

                            {itemInCart(product) ? (
                                <>
                                    <button className="btn btn-outline-primary btn-sm me-1" onClick={() => increment(product)}>+</button>
                                    <span className="mx-2">{getItemQuantity(product._id)}</span>
                                    <button className="btn btn-outline-primary btn-sm me-1"  onClick={() => decrement(product)}>-</button>
                                </>
                            ) : (
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                )
                            }

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}



