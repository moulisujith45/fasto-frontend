import axios from "../config/axios";

const addProduct = (data) => {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const startAddProduct = (data) => {
    return async(dispatch) => {
        try{
            const response = await axios.post('/api/product', data, {
                headers: {
                    Authorization:localStorage.getItem('token')
                }
            })
            dispatch(addProduct(response.data))
        } catch(err){
            console.log(err)
        }
    }
}

const getProduct = (data) => {
    return{
        type: 'GET_PRODUCT',
        payload: data
    }
}

export const startGetProduct = () => {
    return async(dispatch)=> {
        try{
            const response = await axios.get('/api/getAllProducts')
            dispatch(getProduct(response.data))
            console.log(response.data)
        } catch(e){
            console.log(e)
        }
    }
}

const removeProduct = (id) => {
    return{
        type: 'REMOVE_PRODUCT',
        payload: id
    }
}

export const startRemoveProduct = (id) => {
    return async(dispatch) => {
        if(!id){
            console.error("missing product ID for deletion")
        }

        try {
             await axios.delete(`/api/admin/products/${id}`,{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            dispatch(removeProduct(id))
        } catch(e){
            console.log(e)
        }
    }
}

const editProduct = (data) => {
    return {
        type: "EDIT_PRODUCT",
        payload: data
    }
}

export const startEditProduct = (id, formData) => {
    return async(dispatch) => {
        if(!id) {
            console.error('Missing product ID to edit')
        }
        try {
            const response = await axios.put(`/api/admin/product/${id}`, formData, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            dispatch(editProduct(response.data))
            console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }
}

