const cartInitialState = {
    data: []
}

const cartReducer = (state = cartInitialState,action) => {
    switch (action.type){
        case "ADD_TO_CART":{
            return {...state, data:[...state.data, action.payload]}
        }
        case "GET_USER_CART" :{
            console.log(action.payload[0].products,"22")
            return {...state, data: action.payload[0].products}
        }
        case "INC_QUANTITY" :{
            return {...state, data: state.data.map((ele)=>{
                if(ele._id === action.payload){
                    return {...ele, quantity: ele.quantity + 1}
                }else{
                    return {...ele}
                }
            })}
        }
        // case "INC_QUANTITY":
        //     return {
        //         ...state,
        //         data: state.data.map(ele => {
        //             if (ele._id === action.payload) {
        //                 return { ...ele, quantity: ele.quantity + 1 };
        //             } else {
        //                 return { ...ele };
        //             }
        //         })
        //     };
        case "DEC_QUANTITY":{
            return {...state,data:state.data.map((ele) => {
                if(ele._id === action.payload){
                    return {...ele, quantity: ele.quantity - 1}
                }else{
                    return {...ele}
                }
            })}
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

