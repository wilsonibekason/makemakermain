import { BLOG_ACTION_TYPE } from "../actions/BlogActionTypes";
import { client, urlFor } from "../../client";

export const INITIAL_STATE = {
  name: "",
  email: "",
  review: "",
  isLocalStorageSave: false,
  isError: null || "",
  isLoading: false,
};

const { FORM_CHANGE, SUBMIT_FORM } = BLOG_ACTION_TYPE;
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
    default:
      return state;
  }
};
