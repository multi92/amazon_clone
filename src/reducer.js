export const initialState = {
  basket: [],
  user: null,
};

// Selector

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      //return curent state and changed basket + action.item
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      //we cloned the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its no in basket `
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
