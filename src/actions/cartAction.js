import axios from "../config/axios"

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
})

export const getUserCart = (product) => {
    // console.log(product, "24342")
    return {
        type:'GET_USER_CART',
        payload: product,
    }
}

export const startGetUserCart = () => {
    return async(dispatch) => {
        try{
            const response = await axios.get("/api/getUserCart",{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(getUserCart(response.data))
            // console.log(response.data,"nooo plz")
            
        }catch(e){
            console.log(e)
        }
    }
}

export const startAddCart = (product) => {
    return async (dispatch) => {
        
        try {
          const response = await axios.put('/api/updateCart', product ,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
          });
          console.log(response.data, "123")
        //   dispatch(addToCart(product));
        console.log(response.data)
        } catch (err) {
          console.log(err);
        }
      };
}

const removeCart = (id) => {
    return{
        type:"REMOVE_CART",
        payload:id
    }
}

export const StartRemoveCart = (id) => {
    return async(dispatch) => {
        if(id){
            console.log("missing cart ID for deletion")
        }
        try{
            await axios.delete(`/api/user/cart/${id}`,{
                headers:{
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(removeCart(id))
        }catch(e){
            console.log(e)
        }
    }


}



