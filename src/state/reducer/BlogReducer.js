import { BLOG_ACTION_TYPE } from "../actions/BlogActionTypes";
import { client, urlFor } from "../../client";

export const INITIAL_STATE = {
  name: "",
  email: "",
  review: "",
  isLocalStorageSave: false,
  isError: null || "",
  isLoading: false,
  items: [],
  isCartOpen: false,
};
//// initialsatte fro the reviewform submit
export const INITIAL_REVIEW_STATE = {
  _type: "reviews",
  email: "",
  name: "",
  review: "",
};

export const CART_INITIAL = {
  isCartOpen: false,
};

const {
  FORM_CHANGE,
  SUBMIT_FORM,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SUBMIT_REVIEW,
  CART_OPEN,
} = BLOG_ACTION_TYPE;

export const ReviewState = (state, action) => {
  switch (action.type) {
    case CART_OPEN:
      return !state;
    default:
      return state;
  }
};

export const BlogReducer = (state, action) => {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SUBMIT_FORM:
      return {
        ...state,
      };
    case ADD_TO_BASKET:
      return (state.items = [...state.items, action.payload]);
    case REMOVE_FROM_BASKET:
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `cannot remove product ${action.payload.id} because it is not found`
          );
      return (state.items = newBasket);
    default:
      return state;
  }
};
