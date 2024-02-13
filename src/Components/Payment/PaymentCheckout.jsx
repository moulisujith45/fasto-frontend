import {useSelector} from "react-redux";

export default function PaymentCheckout(){

    const order = useSelector((state) => {
        return state.order
    })
    console.log(order)
    //get the order id by the order selector
    const handlePaymentProceed = ()=>{
        const data = {
       
        }
        
        const payment = axios.post(`http://localhost:3040/api/user/payment`,data,{
            headers : {
                Authorization: localStorage.getItem('token')
            }
        })
    }

    return(
        <div>

        </div>
    )
}