const deliveryInitialState = []

const deliveryReducer = (state = deliveryInitialState,action) => {
    switch(action.type){
        case "GET_ALL_DELIVERYMAN" : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default deliveryReducer