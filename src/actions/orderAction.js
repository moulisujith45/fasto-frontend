import axios from "../config/axios"
import {toast} from 'react-toastify'

export const newOrder = (cart) => ({
    type: "NEW_ORDER",
    payload : cart
})

export const startNewOrder = (totalPrice) => {
    console.log(totalPrice,"startNewOrder")
    return async (dispatch) => {
        try{
            const response = await axios.post('/api/user/order',{"total":totalPrice},{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            toast.success("Order Created")
            dispatch(newOrder(response.data))
        }catch(err){
            console.log(err)
        }
    }
}

export const startPayment = (card)=>{
    return async(dispatch)=>{
        try{
            const response = await axios.post(`/api/user/payment`,{card},{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(response.data.id)
            dispatch(setStartPayment(response.data)) 
  
        }catch(err){
            console.log(err)
        }
    }
}
// const setStartPayment = (data)=>{
//     if(data){
//         localStorage.setItem("stripeId",data.id)
//         window.location = data.url
//     }
//     // return{
//     //     type:"CREATE_PAYMENT_TRUE",
//     //     paylaod:data
//     // }

// }

// export const startPayment = (card)=>{
//     return async(dispatch)=>{
//         try{
//             const response = await axios.post(`/api/user/payment`,{card},{
//                 headers: {
//                     Authorization: localStorage.getItem('token')
//                 }
//             })
//             console.log(response.data.id)
//             dispatch(setStartPayment(response.data)) 
  
//         }catch(err){
//             console.log(err)
//         }
//     }
// }
// const setStartPayment = (data)=>{
//     if(data){
//         localStorage.setItem("stripeId",data.id)
//         window.location = data.url
//     }
//     return{
//         type:"CREATE_PAYMENT_TRUE",
//         paylaod:data
//     }

// }

export const getOrder = (payload) => ({
    type: "GET_ORDER",
    payload :payload
})

export const startGetOrder = () => {
    return async(dispatch) => {
        try{
            const response = await axios.get('/api/user/userOder',{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(getOrder(response.data))
        }catch(e){
            console.log(e)
        }
    }
}
