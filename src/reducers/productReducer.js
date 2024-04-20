const productInitialState = []

const productReducer = (state = productInitialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":{
            return [...state, {...action.payload}]
        }
        case "GET_PRODUCT":{
            // console.log(action.payload,'reducerproduct')
            return [...action.payload]
        }
        case "REMOVE_PRODUCT":{
            return state.filter(ele => ele._id !== action.payload)
        }
        case "EDIT_PRODUCT":{
            return state.map((ele)=> {
                if(ele._id === action.payload._id){
                    return{...ele,...action.payload}
                } else {
                    return{...ele}
                }
            }) 
        }
        case "GET_ALLPRODUCTS" :{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default productReducer