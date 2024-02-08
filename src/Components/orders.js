
import { useState ,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startNewOrder } from "../actions/orderAction"
import { startGetProduct } from "../actions/productAction"
import { startGetUserCart } from "../actions/cartAction"
import { startGetAddress } from "../actions/addressAction"

export default function Orders(){
    const dispatch = useDispatch()
    const [order,setOrder] = useState(null)
    const cart = useSelector((state) => state.cart.data)
    const products = useSelector((state) => state.product)
    const address = useSelector((state) => state.address)
    // const orders = useSelector((state) => state.data.Orders )
    console.log(address)
    useEffect(() => {
        dispatch(startGetAddress())
        dispatch(startGetProduct())
        dispatch(startGetUserCart())
    },[dispatch])

    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
        const product = products.find((product) => product._id === item.productId )
        if(product){
            totalPrice += product.price * item.quantity
            totalQuantity += item.quantity
        }
    } )
    const handlePay = () => {
        dispatch(startNewOrder(Math.ceil(totalPrice)))
    }

    return(
        <div className="order-container">
            <div>
                <di>
                   {cart.map((item,index) => {
                    const product = products.find((product) => product._id === item.productId)
                    if(!product) {
                        return <div key={index} className="cart-item"> </div>
                    }
                    return(
                        <div key={index} className="cart-item">
                            <img src={`http://localhost:3040/images/${product.image}`} alt={product.name} />
                            <div className="iteam-details">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <p>Quantity : {item.quantity} </p>
                            </div>
                        </div>
                    )
                   } )}
                </di>
            </div>
            <div className="order-price">
                <h2>Order Price</h2>
                <p>Total Price: ${Math.ceil(totalPrice)} </p>
                <p>Total Quantity : {totalQuantity} </p>
                <button onClick={handlePay} >Pay</button>
            </div>
        </div>
    )
}
