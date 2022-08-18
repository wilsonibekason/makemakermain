export const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
  isLocalStorageSave: false,
  isError: null || "",
  isLoading: false,
};

export const BlogReducer = (state, action) => {
  switch (action.type) {
    case "FORM_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
