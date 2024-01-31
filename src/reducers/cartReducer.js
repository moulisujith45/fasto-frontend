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
            // console.log(action.payload,"reducer")
            return {...state, data: action.payload}
        }
        default :{
            return {...state}
        }
    }
}
export default cartReducer