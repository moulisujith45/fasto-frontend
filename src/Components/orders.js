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
    return(
        <div className="order-container">
            <div>
                <di>
                    <button>hello</button>
                </di>
            </div>
        </div>
    )
}
