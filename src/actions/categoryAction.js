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
            // console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }
}