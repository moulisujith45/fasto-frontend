const productInitialState = []

const productReducer = (state = productInitialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":{
            return [...state,action.payload]
        }
        case "GET_PRODUCT":{
            return [...state,...action.payload]
        }
        case "REMOVE_PRODUCT":{
            return state.filter(ele => ele._id !== action.payload)
        }
        default:{
            return[...state]
        }
    }
}

export default productReducer