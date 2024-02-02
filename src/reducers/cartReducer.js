const cartInitialState = {
    data: []
}

const cartReducer = (state = cartInitialState,action) => {
    switch (action.type){
        // case "ADD_TO_CART":{
        //     console.log(action.payload ,"reducer")
        //     return [...state,action.payload]
        // }
        case "GET_USER_CART" :{
            return {...state, data: action.payload}
        }
        case "REMOVE_CART" : {
            return {...state, data: state.data.filter(ele => ele._id !== action.payload)}
        }
        default :{
            return {...state}
        }
    }
}
export default cartReducer

