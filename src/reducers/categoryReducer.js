let categoryInitialState = []

const categoryReducer = (state = categoryInitialState, action) => {
    switch(action.type) {
        case "ADD_CATEGORY":{
            return[...state,{...action.payload}]
        }
        case "GET_CATEGORY": {
            // console.log(action.payload)
            return[...state,...action.payload]
        }
        
        default: {
            return [...state]
        }
            
    }

}

export default categoryReducer