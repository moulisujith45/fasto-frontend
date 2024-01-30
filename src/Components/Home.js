import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetProduct } from "../actions/productAction";
import { startAddCart ,StartRemoveCart} from "../actions/cartAction";
export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(startGetProduct());
    }, [dispatch]);
    const addToCart = (product) => {
        let transformedProduct = {
            productId: product._id,
            quantity:1,
            price:product.price
        }
        console.log(product, "22");
        console.log(transformedProduct,'111')
        dispatch(startAddCart(transformedProduct)); // Pass the product object directly
    };

    // console.log(addToCart)
    
    return (
        <div>
            {products.map((product) => (
                <div key={product} className="card card-product" style={{ maxWidth: '390px' }}>
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
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    
}

