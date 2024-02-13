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
    // const decrementQuantity = (productId) => {
    //     dispatch(StartDecQuantity(productId))
    // }
    const decrementQuantity = (productId) => {
        const item = cart.find(item => item.productId === productId);
        if (item && item.quantity > 1) {
            dispatch(StartDecQuantity(productId));
        }
    }

    return (
        <div>
        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-outline-primary" onClick={handleProceed}>Proceed</button>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {cart.map((item, index) => {
                const product = products.find((product) => product._id === item.productId);
                if (!product) {
                    return <div key={index}>Product not found</div>;
                }
                return (
                    <div key={index} className="col d-flex" style={{ maxWidth: '390px' }}>
                        <div className="card card-product flex-grow-1" style={{ maxWidth: '390px' }}>
                            <div className="card-body">
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
                                    <div>
                                        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => decrementQuantity(item.productId)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => incrementQuantity(item.productId)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
//     <div className="row row-cols-1 row-cols-md-4 g-3">
//     {cart.map((item, index) => {
//         const product = products.find((product) => product._id === item.productId);
//         if (!product) {
//             return <div key={index}>Product not found</div>;
//         }
//         return (
//             <div key={index} className="col d-flex">
//                 <div className="card card-product flex-grow-1" style={{ maxWidth: '390px' }}>
//                     <div className="card-body">
//                         <div className="text-center position-relative">
//                             <img src={`http://localhost:3040/images/${product.image}`} style={{ width: "180px", height: "120px" }} alt={product.name} className="mb-3 img-fluid" />
//                         </div>
//                         <h2 className="fs-6">
//                             <a href="#!" className="text-inherit text-decoration-none">{product.name}</a>
//                         </h2>
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                             <div>
//                                 <span className="text-dark">${product.price}</span>
//                             </div>
//                             <div className="d-flex align-items-center"> {/* Add this div */}
//                                 <button className="btn btn-outline-primary btn-sm me-1" onClick={() => decrementQuantity(item.productId)}>-</button>
//                                 <span className="mx-2">{item.quantity}</span>
//                                 <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => incrementQuantity(item.productId)}>+</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     })}
// </div>



    );
};

export default Cart;
