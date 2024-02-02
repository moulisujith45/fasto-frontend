// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { startGetProduct } from "../actions/productAction";
// import { startAddCart ,StartRemoveCart} from "../actions/cartAction";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';;
// export default function Home() {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.product);
//     const cart = useSelector((state) => state.cart)
    

//     const addToCart = (product) => {
//         let transformedProduct = {
//             productId: product._id,
//             quantity:1,
//             price:product.price
//         }
//         console.log(product, "22");
//         console.log(transformedProduct,'111')
//         toast("Item Added to Cart")
//         dispatch(startAddCart(transformedProduct)); // Pass the product object directly
//     };

//     // console.log(addToCart)
    
//     return (
//         <div>
//             {products.map((product) => (
//                 <div key={product._id} className="card card-product" style={{ maxWidth: '390px' }}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} className="mb-3 img-fluid" />
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
//                         </h2>
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                             <button onClick={() => addToCart(product)}>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
    
// }


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { startGetProduct } from "../actions/productAction";
// import { startAddCart, StartRemoveCart ,incQuantity,decQuantity} from "../actions/cartAction";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Home() {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.product);
//     const cart = useSelector((state) => state.cart.data); // Assuming cart data is stored in 'data' property

//     const [isAdd, setIsAdd] = useState(false)

//     useEffect(() => {
//         dispatch(startGetProduct());
//     }, [dispatch]);

//     const addToCart = (product) => {
//         console.log(product,"addtocart")
//         setIsAdd(!isAdd)
//         // const isInCart = cart && cart.find(item => item.productId === product._id); // Check if cart exists and is an array before calling .find()
//             let transformedProduct = {
//                 productId: product._id,
//                 quantity: 1,
//                 price: product.price
//             }
//             dispatch(startAddCart(transformedProduct));
//             toast("Item Added to Cart");
        
//     };

//     const incrementQuantity = (id) => { 
//         dispatch(incQuantity(id))
//     };

//     const decrementQuantity = (id) => {
//        dispatch(decQuantity(id)) 
//     };

//     return (
//         <div>
//             {products.map((product) => (
//                 <div key={product._id} className="card card-product" style={{ maxWidth: '390px' }}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} className="mb-3 img-fluid" />
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
//                         </h2>
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                            { !isAdd ? <button onClick={() => addToCart(product._id, product)}>Add to Cart</button> :
//                                 <div>
//                                     <button onClick={() => incrementQuantity(product._id)}>+1</button>
//                                     <button onClick={() => decrementQuantity(product._id)}>-1</button>
//                                 </div>}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// const addToCart = (product) => {
//     const productId = product._id;
//     const updatedAddedProducts = { ...addedProducts };
//     if (!updatedAddedProducts[productId]) {
//         updatedAddedProducts[productId] = 1;
//     } else {
//         updatedAddedProducts[productId]++;
//     }
//     setAddedProducts(updatedAddedProducts);
//     dispatch(startAddCart({ productId, quantity: 1, price: product.price }));
//     toast("Item Added to Cart");
// };
// const addToCart = (product) => {
//     const productId = product._id;
//     const cartProducts = cart[0].products
//     console.log(cartProducts,'home')
//     if (cartProducts === productId) {
//         console.log("how")
//        return dispatch(StartIncQuantity({ productId }));
//     } else {
//         dispatch(startAddCart({ productId, quantity: 1, price: product.price }));
//     }
//     toast("Item Added to Cart");
// };




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { startGetProduct } from "../actions/productAction";
// import { startAddCart, StartRemoveCart, StartDecQuantity , StartIncQuantity } from "../actions/cartAction";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { startGetUserCart } from "../actions/cartAction";
// export default function Home() {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.product);
//     const cart = useSelector((state) => state.cart.data); // Assuming cart data is stored in 'data' property

//     const [addedProducts, setAddedProducts] = useState({}); // State to track added products and their quantities

//     useEffect(() => {
//         dispatch(startGetUserCart());
//     }, [dispatch])
//     const addToCart = (product) => {
//         const productId = product._id;
//         const cartProducts = cart.products; // Assuming cart is an array with a single object containing the products array
    
//         console.log(cartProducts, 'home');
    
//         // Check if productId exists in cartProducts
//         const isProductInCart = cartProducts.some(item => item.productId === productId);
    
//         if (isProductInCart) {
//             console.log("Product already in cart");
//             // If product already in cart, increment its quantity
//             dispatch(StartIncQuantity(productId));
//         } else {
//             // If product not in cart, add it with quantity 1
//             console.log("notworking")
//             dispatch(startAddCart({ productId, quantity: 1, price: product.price }));
//         }
    
//         toast("Item Added to Cart");
//     };
    

//     const incrementQuantity = (id) => {
        
//         dispatch(StartIncQuantity(id));
//     };

//     const decrementQuantity = (id) => {
//        dispatch(StartDecQuantity(id))
//     };

//     return (
//         <div>
//             {products.map((product) => (
//                 <div key={product._id} className="card card-product" style={{ maxWidth: '390px' }}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} className="mb-3 img-fluid" />
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
//                         </h2>
                      
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                             {addedProducts[product._id] ? (
//                                 <div>
//                                     <button onClick={() => incrementQuantity(product._id)}>+1</button>
//                                     <span>{addedProducts[product._id]}</span>
//                                     <button onClick={() => decrementQuantity(product._id)}>-1</button>
//                                 </div>
//                             ) : (
//                                 <button onClick={() => addToCart(product)}>Add to Cart</button>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             ))}
            
//         </div>
//     );
// }
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
        const cartProducts = cart?.products; 
        // Check if cartProducts is defined and if productId exists in cartProducts
        const isProductInCart = cartProducts?.some(item => item.productId === productId); // Use optional chaining here too
        if (isProductInCart) {
            // If product already in cart, increment its quantity
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
                            {addedProducts[product._id] ? (
                                <div>
                                    <button onClick={() => incrementQuantity(product._id)}>+1</button>
                                    <span>{addedProducts[product._id]}</span>
                                    <button onClick={() => decrementQuantity(product._id)}>-1</button>
                                </div>
                            ) : (
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


