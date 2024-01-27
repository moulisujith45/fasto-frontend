// import { useDispatch,useSelector } from "react-redux";
// import { useEffect,useState } from "react";

// import { startGetProduct } from "../../actions/productAction";

// const Cart = (props) => {
//     const dispatch = useDispatch()

//     const products = useSelector((state) => state.product)

//     useEffect(() => {
//         dispatch(startGetProduct())
//     },[dispatch])

//     return(
//         <div>
//             <h3>hi</h3>
//             {products.map((product) => (
//                 <div key={product.id}>

//                 </div>
//             ))}
//         </div>
        
//     )
// }

// export default Cart

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// import { startGetProduct } from "../../actions/productAction";

// const Cart = (props) => {
//     const dispatch = useDispatch()

//     const products = useSelector((state) => state.product)

//     useEffect(() => {
//         dispatch(startGetProduct())
//     },[dispatch])

//     return(
//         <div>
//             <h3>hi</h3>
//             {products.map((product) => (
//                 <div key={product.id} className="card card-product" style={{maxWidth: '390px'}}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <a href="#!">
//                                 <img src={`http://localhost:3040/images/${product.image}`}
//                                     alt={product.name}
//                                     className="mb-3 img-fluid" />
//                             </a>
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!"
//                                 className="text-inherit text-decoration-none">{product.description}</a>
//                         </h2>
//                         <div
//                             className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cart;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// import { startGetProduct } from "../../actions/productAction";

// const Cart = (props) => {
//     const [cartItems,setCartItems] = useState([])
//     const dispatch = useDispatch()

//     const products = useSelector((state) => state.product)

//     useEffect(() => {
//         dispatch(startGetProduct())
//     },[dispatch])

//     const addToCart = () =>{
//         const newItem = {_id}
//     }

//     return(
//         <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
//             <h3>hi</h3>
//             {products.map((product) => (
//                 <div key={product.id} className="card card-product" style={{maxWidth: '390px'}}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <a href="#!">
//                                 <img src={`http://localhost:3040/images/${product.image}`}
//                                     alt={product.name}
//                                     className="mb-3 img-fluid" />
//                             </a>
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!"
//                                 className="text-inherit text-decoration-none">{product.description}</a>
//                         </h2>
//                         <div
//                             className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="product-fade-block">
//                     <div className="d-grid mt-4">
//                     <button onClick={addToCart} className="btn btn-primary rounded-pill">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>
                
//             ))}
//         </div>
//     );
// };

// export default Cart;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// import { startGetProduct } from "../../actions/productAction";

// const Cart = (props) => {
//     const [cartItems, setCartItems] = useState([])
//     const dispatch = useDispatch()

//     const products = useSelector((state) => state.product)

//     useEffect(() => {
//         dispatch(startGetProduct())
//     },[dispatch])

//     const addToCart = (product) => {
//         console.log("Adding to cart:",product)
//         setCartItems([...cartItems, product])
//     }
//     useEffect(() => {
//         console.log('Cart items: ', cartItems);
//     }, [cartItems])

//     return(
//         <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
//             <h3>hi</h3>
//             {products.map((product) => (
//                 <div key={product.id} className="card card-product" style={{maxWidth: '390px'}}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <a href="#!">
//                                 <img src={`http://localhost:3040/images/${product.image}`}
//                                     alt={product.name}
//                                     className="mb-3 img-fluid" />
//                             </a>
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!"
//                                 className="text-inherit text-decoration-none">{product.description}</a>
//                         </h2>
//                         <div
//                             className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                             <button onClick={() => addToCart(product)}>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//            <div>
//            {cartItems.map((item, index) => (
//     <div key={index} className="card card-product" style={{maxWidth: '390px'}}>
//         <div className="card-body">
//             <div className="text-center position-relative">
//                 <a href="#!">
//                     <img src={`http://localhost:3040/images/${item.image}`}
//                         alt={item.name}
//                         className="mb-3 img-fluid" />
//                 </a>
//             </div>
//             <h2 className="fs-6">
//                 <a href="#!"
//                     className="text-inherit text-decoration-none">{item.description}</a>
//             </h2>
//             <div
//                 className="d-flex justify-content-between align-items-center mt-3">
//                 <div>
//                     <span className="text-dark">${item.price}</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// ))}

//            </div>
//         </div>
//     );
// };

// export default Cart;
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { startGetProduct } from "../../actions/productAction";
// const Cart = (props) => {
//     const [cartItems, setCartItems] = useState([])
//     const dispatch = useDispatch()
//     const products = useSelector((state) => state.product)
//     useEffect(() => {
//         dispatch(startGetProduct())
//     },[dispatch])
//     const incrementCart = (product) => {
//         setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//     }
//     const decrementCart = (product) => {
//         const existingProduct = cartItems.find(item => item.id === product.id);
//         if (existingProduct.quantity === 1) {
//             setCartItems(cartItems.filter(item => item.id !== product.id));
//         } else {
//             setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
//         }
//     }

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//     useEffect(() => {
//         console.log('Cart items: ', cartItems);
//     }, [cartItems])

//     return(
//         <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
//             <h3>hi</h3>
//             {products.map((product) => (
//                 <div key={product.id} className="card card-product" style={{maxWidth: '390px'}}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <a href="#!">
//                                 <img src={`http://localhost:3040/images/${product.image}`}
//                                     alt={product.name}
//                                     className="mb-3 img-fluid" />
//                             </a>
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!"
//                                 className="text-inherit text-decoration-none">{product.description}</a>
//                         </h2>
//                         <div
//                             className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                             <button onClick={() => addToCart(product)}>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//            <div>
//            {cartItems.map((item, index) => (
//     <div key={index} className="card card-product" style={{maxWidth: '390px'}}>
//         <div className="card-body">
//             <div className="text-center position-relative">
//                 <a href="#!">
//                     <img src={`http://localhost:3040/images/${item.image}`}
//                         alt={item.name}
//                         className="mb-3 img-fluid" />
//                 </a>
//             </div>
//             <h2 className="fs-6">
//                 <a href="#!"
//                     className="text-inherit text-decoration-none">{item.description}</a>
//             </h2>
//             <div
//                 className="d-flex justify-content-between align-items-center mt-3">
//                 <div>
//                     <span className="text-dark">${item.price}</span>
//                 </div>
//                 <div>
//                     <button onClick={() => decrementCart(item)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => incrementCart(item)}>+</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// ))}
//            </div>
//            <div>
//                <h2>Total Amount: ${totalAmount}</h2>
//                <h2>Total Items: {totalItems}</h2>
//            </div>
//         </div>
//     );
// };

// export default Cart;
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startGetProduct } from "../../actions/productAction";

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([])
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(startGetProduct())
    },[dispatch])

    // const addToCart = (product) => {
    //     console.log("Adding to cart:",product)
    //     setCartItems([...cartItems, {...product, quantity: 1}])
    // }
    const addToCart = (product) => {
        console.log("Adding to cart:",product)
        const newProduct = { ...product, quantity: 1 };
        setCartItems([...cartItems, newProduct]);
    }

    const incrementCart = (product) => {
        setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    const decrementCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct.quantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id));
        } else {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
        }
    }

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        console.log('Cart items: ', cartItems);
    }, [cartItems])

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
        
            {products.map((product) => (
                <div key={product.id} className="card card-product" style={{maxWidth: '390px'}}>
                    <div className="card-body">
                        <div className="text-center position-relative">
                            <a href="#!">
                                <img src={`http://localhost:3040/images/${product.image}`}
                                    alt={product.name}
                                    className="mb-3 img-fluid" />
                            </a>
                        </div>
                        <h2 className="fs-6">
                            <a href="#!"
                                className="text-inherit text-decoration-none">{product.description}</a>
                        </h2>
                        <div
                            className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <span className="text-dark">${product.price}</span>
                            </div>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
           <div>
           {cartItems.map((item, index) => (
    <div key={index} className="card card-product" style={{maxWidth: '390px'}}>
        <div className="card-body">
            <div className="text-center position-relative">
                <a href="#!">
                    <img src={`http://localhost:3040/images/${item.image}`}
                        alt={item.name}
                        className="mb-3 img-fluid" />
                </a>
            </div>
            <h2 className="fs-6">
                <a href="#!"
                    className="text-inherit text-decoration-none">{item.description}</a>
            </h2>
            <div
                className="d-flex justify-content-between align-items-center mt-3">
                <div>
                    <span className="text-dark">${item.price}</span>
                </div>
                <div>
                    <button onClick={() => decrementCart(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementCart(item)}>+</button>
                </div>
            </div>
        </div>
    </div>
))}
           </div>
           <div>
               <h2>Total Amount: ${totalAmount}</h2>
               <h2>Total Items: {totalItems}</h2>
           </div>
        </div>
    );
};

export default Cart;

