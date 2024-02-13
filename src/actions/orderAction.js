import axios from "../config/axios"

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
            dispatch(newOrder(response.data))
        }catch(err){
            console.log(err)
        }
    }
}

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
