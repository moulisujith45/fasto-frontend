import axios from "../config/axios";


 const startAddCatgeory = (categoryData) => {
    return {
        type: "ADD_CATEGORY",
        payload: categoryData
    }
}

export const addCategoryAsync = (category) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/category", category, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            console.log(response.data)
            dispatch(startAddCatgeory(response.data))
        } catch(err) {
            console.log(err)
        }
    }
}

const getCategory = (list) => {
    return {
        type: "GET_CATEGORY",
        payload: list
    }
}

export const startGetCategory = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get('/api/listallCategory', {

            })
            dispatch(getCategory(response.data))
            // console.log(response.data,"in action")
        } catch(err){
            console.log(err)
        }
    }
}

export const startRemoveCategory = (id) => {
    return async(dispatch) => {
        if(!id) {
            console.error("missing category ID for deletion")
        }

        try {
            const response = await axios.delete(`/api/admin/category/${id}`,{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            dispatch(removeCategory(id))
        } catch(e){
            console.log(e)
        }
    }
}

const removeCategory = (id) => {
    return {
        type: 'REMOVE_CATEGORY',
        payload: id
    }
}

export const startEditCategory = (id, formData) => {
    return async(dispatch) => {
        if(!id){
            console.error('Missing category id to edit')
        }
        try {
            const response = await axios.put(`/api/admin/updateCategory/${id}`, formData, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            dispatch(editCategory(response.data))
            console.log(response.data)
        } catch(e){
            console.log(e)
        }
    }
}

const editCategory = (data) => {
    return{
        type: 'EDIT_CATEGORY',
        payload: data
    }
}