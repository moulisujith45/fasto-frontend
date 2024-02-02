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
            dispatch(addAddress(response.data))
           
        } catch(err){
            console.log(err)
        }
    }
}

const getAddress = (data) => {
    return{
        type: "GET_ADDRESS",
        payload: data
    }
}

export const startGetAddress = () => {
    return async(dispatch) => {
        try{
            const response = await axios.get('/api/getaddress' ,{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            dispatch(getAddress(response.data[0]))
        } catch(err){
            console.log(err)
        }
    }
}



const editAddress = (data) => ({
    type: "EDIT_ADDRESS",
    payload: data,
  });
  
  export const startEditAddress = (addressId, updatedAddress) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`/api/updateaddress/${addressId}`, updatedAddress, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        
        console.log(response.data);
        dispatch(editAddress(response.data));
      } catch (err) {
        console.error(err);
      }
    };
  };
  