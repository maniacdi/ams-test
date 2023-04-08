const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
const cartCount = cartData.reduce((total, item) => {
  return total + item.count;
}, 0);

export const initialState = {
  count: cartCount,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("sale", initialState.count);
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
