import { BLOG_ACTION_TYPE } from "../actions/BlogActionTypes";

export const INITIAL_STATE = {
  name: "",
  email: "",
  review: "",
  isLocalStorageSave: false,
  isError: null || "",
  isLoading: false,
};

const { FORM_CHANGE } = BLOG_ACTION_TYPE;
export const BlogReducer = (state, action) => {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
