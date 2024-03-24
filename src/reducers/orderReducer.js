const orderInitialState = {
    data:[]
}

const orderReducer = (state = orderInitialState,action) => {
    switch (action.type){
        case "NEW_ORDER":{
            return {state,data:[action.payload]}
        }
        case "GET_ALL_ORDERS": {
            return { ...state, data: action.payload };
            
        }
        default : {
            return {...state }
        }
    }
}

export default  orderReducer