export const initialState = {
  basket: ["milos", "ana"],
};

// Selector

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { state };
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      return { state };
      break;
    default:
      return state;
  }
};

export default reducer;