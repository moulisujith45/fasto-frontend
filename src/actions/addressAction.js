import axios from "../config/axios";

const addAddress = (data) => {
    return {
      type: "ADD_ADDRESS",
     payload: data
    }
}

export const startAddAddress = (address) => {
    return async(dispatch) => {
        try {
            const response = await axios.post('/api/address', address, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(startAddAddress(response.data))
        } catch(err){
            console.log(err)
        }
    }
}