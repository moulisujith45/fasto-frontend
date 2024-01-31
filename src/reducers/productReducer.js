const productInitialState = []

const productReducer = (state = productInitialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":{
            console.log("ab")
            return [...state, {...action.payload}]
        }
        case "GET_PRODUCT":{
            console.log("bc")
            return [...action.payload]
        }
        case "REMOVE_PRODUCT":{
            console.log("cd")
            return state.filter(ele => ele._id !== action.payload)
        }
        case "EDIT_PRODUCT":{
            console.log("ef")
            return state.map((ele)=> {
                if(ele._id === action.payload._id){
                    return{...ele,...action.payload}
                } else {
                    return{...ele}
                }
            }) 
        }
        default:{
            console.log("gh")
            return [...state]
        }
    }
}

export default productReducer