import { GET_PRODUCT, SELECTED_PRODUCT } from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions

  switch (type) {
    case GET_PRODUCT:
      return { ...state, products: payload };
    case SELECTED_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
