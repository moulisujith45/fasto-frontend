import { useState ,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startNewOrder } from "../actions/orderAction"
import { startGetProduct } from "../actions/productAction"
import { startGetUserCart } from "../actions/cartAction"
import { startGetAddress } from "../actions/addressAction"
import { useNavigate } from "react-router-dom"
import axios from "../config/axios"

export default function Orders() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [order, setOrder] = useState(null)
    const cart = useSelector((state) => state.cart.data)
    const products = useSelector((state) => state.product)
    const address = useSelector((state) => state.address)

    useEffect(() => {
        dispatch(startGetAddress())
        dispatch(startGetProduct())
        dispatch(startGetUserCart())
    }, [dispatch])

    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((item) => {
        const product = products.find((product) => product._id === item.productId)
        if(product) {
            totalPrice += product.price * item.quantity
            totalQuantity += item.quantity
        }
    })

    const orderInfo = useSelector((state) => {
        if(state.order.data.length > 0) {
            return state.order.data[0]
        }
    })

    const handlePaymentProceed = async (e) => {
        e.preventDefault()
        dispatch(startNewOrder(Math.ceil(totalPrice)))
        const data = {
            orderId: orderInfo && orderInfo._id,
            total: orderInfo && orderInfo.total
            
        };
        console.log(data)
        try {
            const payment = await axios.post(`api/user/payment`, data, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });

            localStorage.setItem("stripeId", payment.data.id);
            console.log(payment.data.id);
            window.location = payment.data.url;
        } catch (err) {
            console.log(err);
        }
    };

    const handleMap = () => {
        navigate("/map")
    }

    return (
        <div className="order-container">
            {/* Rendering Cart Items */}
            <div>
                <button onClick={handleMap}>Map</button>
            </div>
            <div>
                {cart.map((item, index) => {
                    const product = products.find((product) => product._id === item.productId)
                    if(!product) {
                        return <div key={index} className="cart-item"></div>
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
                                        <p>Quantity : {item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                })}
            </div>

            {/* Rendering Order Price */}
            <div className="order-price">
                <h2>Order Price</h2>
                <p>Total Price: ${Math.ceil(totalPrice)}</p>
                <p>Total Quantity : {totalQuantity}</p>
            </div>

            {/* Button to Proceed to Payment */}
            <button onClick={handlePaymentProceed}>Proceed to pay</button>
        </div>
    )
}
