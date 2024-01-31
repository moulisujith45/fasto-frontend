const addressInitialState = {
    addresses: []
};

const addressReducer = (state = addressInitialState, action) => {
    switch(action.type) {
        case "ADD_ADDRESS": {
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            }
        }
        default:
            return state;
    }
};

export default addressReducer;

