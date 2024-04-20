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
const getAllProducts = (data) => {
    console.log(data,"sujith")
    return{
        
        type: 'GET_ALLPRODUCTS',
        payload: data
    }
}

export const startGetAllProducts = (search,limit,page,order) => {
    return async(dispatch) => {
        try{
            const response = await axios.get('/api/listAllProducts')
            dispatch(getAllProducts(response.data))
            console.log(response.data,'allproducts')
        }catch(e){
            console.log(e)
        }
    }
}


const getProduct = (data) => {
    return{
        type: 'GET_PAGINATION',
        payload: data
    }
}


export const startGetProduct = (search,limit,page,order) => {
    return async(dispatch)=> {
        console.log(search,"search")
        console.log(limit,"limit")
        console.log(page,"page")
        console.log(order,"order")
        try{
            // const response = await axios.get('/api/getAllProducts')
            const response = await axios.get(`/api/getAllProducts?search=${search}&limit=${limit}&page=${page}&order=${order}`)
            dispatch(getProduct(response.data))
            console.log(response.data,'pagina')
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

