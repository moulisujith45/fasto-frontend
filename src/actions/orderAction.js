import axios from "../config/axios"

export const newOrder = (cart) => ({
    type: "NEW_ORDER",
    payload : cart
})

export const startNewOrder = (cart) => {
    console.log(cart,"startNewOrder")
    return async (dispatch) => {
        try{
            const response = await axios.post('/api/user/order',cart,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(newOrder(cart))
        }catch(err){
            console.log(err)
        }
    }
}

