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
            
        }catch(e){
            console.log(e)
        }
    }
}

export const startAddCart = (product) => {
    console.log(product,"startAddcart")
    return async (dispatch) => {
        
        try {
          const response = await axios.put('/api/updateCart', product ,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
          });
          console.log(response.data.products, "456")
          dispatch(addToCart(product))
        } catch (err) {
          console.log(err)
        }
      };
}
export const incQuantity = (id) => {
    return{
        type:"INC_QUANTITY",
        payload: id
    }
}

export const StartIncQuantity = (id) => {
    return async (dispatch) => {
        if(!id){
          return  console.log('missing product id')
        }
        try{
            const response= await axios.put(`/api/user/inccart/${id}`,id,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            console.log(response.data.productId,'incput')
            dispatch(incQuantity(response.data.productId))
        }catch(err){
            console.log(err)
        }
    }
}
export const decQuantity = (id) => {
    console.log(id,"dec")
    return{
        type:"DEC_QUANTITY",
        payload:id
    }
}

export const StartDecQuantity = (id) => {
    return async (dispatch) => {
        if(!id){
          return  console.log('missing product id')
        }
        try{
            const response = await axios.put(`/api/user/deccart/${id}`,id,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            console.log(response.data.productId,'decput')
            dispatch(decQuantity(response.data.productId))
        }catch(err){
            console.log(err)
        }
    }
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



