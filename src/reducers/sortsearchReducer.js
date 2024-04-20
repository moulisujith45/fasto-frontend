const sortSearchInitialState = {
    pagination:{

    }
}

const sort = (state =sortSearchInitialState, action) => {
    switch(action.type){
        case "GET_PAGINATION":{
            return {
                ...state,
                pagination:action.payload

                
            }
        }
        default:{
            return {...state}
        }
    }
}

export default sort