const addressInitialState = {}
  

const addressReducer = (state = addressInitialState, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {...action.payload}

    case "GET_ADDRESS":
      return { ...action.payload};

    case "EDIT_ADDRESS":
      const updatedAddresses = { ...state.addresses };
      updatedAddresses[action.payload._id] = action.payload;
      return {
        ...state,
        addresses: updatedAddresses,
      };

    default:
      return state;
  }
};

export default addressReducer;

