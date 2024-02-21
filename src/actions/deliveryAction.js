import axios from "../config/axios";

const getAllDeliveryman = (data) => {
    return {
        type : 'GET_ALL_DELIVERYMAN',
        payload: data
    }
}

export const startGetAllDeliveryMan = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get('/api/admin/getAllDeliveryman',{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(getAllDeliveryman(response.data))
        } catch(err){
            console.log(err)
        }
    }
}