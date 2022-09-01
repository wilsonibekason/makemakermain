import { ACTION_TYPES } from "./actions";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const {
  REMOVE_PRODUCTS,
  INCREASE_PRODUCT_ID,
  PRODUCT_INCREASE,
  PRODUCT_DECREASE,
} = ACTION_TYPES;

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  let updatedPrice = [...state.totalPrice];
  let updatedQuantity = [...state.totalQuantity];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item?.id === product?._id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  updatedPrice =
    updatedPrice + product?.defaultProductVariant?.price * updatedItem.quantity;
  updatedQuantity = updatedQuantity + updatedItem.quantity;
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    // const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    productQuantity: updatedPrice,
    totalQuantity: updatedQuantity,
  };
};

const removeProductFromCart = (productId, state) => {
  console.log(`removing product id ${productId}`);
  const updatedCart = [...state.cart];
  let updatedPrice = [...state.totalPrice];
  let updatedQuantity = [...state.totalQuantity];
  const updatedCartIndex = updatedCart.findIndex(
    (item) => item?.id === productId
  );
  const updatedItem = { ...updatedCart[updatedCartIndex] };
  //   updatedPrice = updatedPrice - updatedItem.defaultProductVariant.price;
  updatedPrice = updatedPrice - updatedItem.price;
  updatedQuantity = updatedQuantity - 1;
  updatedItem.quantity--;
  if (updatedItem <= 0) {
    updatedCart.splice(updatedCartIndex, 1);
  } else {
    updatedCart[updatedCartIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    totalPrice: updatedPrice,
    totalQuantity: updatedQuantity,
  };
};
const increaseProductID = (productId, state) => {
  const updatedCart = [...state.cart];
  let updatedPrice = [...state.totalPrice];
  let updatedQuantity = [...state.totalQuantity];
  const updatedCartIndex = updatedCart?.findIndex(
    (item) => item?.id === productId
  );
  const updatedItem = { ...updatedCart[updatedCartIndex] };
  updatedItem.quantity++;
  updatedPrice = updatedPrice + updatedItem.price;
  updatedQuantity = updatedQuantity + 1;
  if (updatedItem < 0) return updatedItem;
  if (updatedItem <= 0) {
    //   updatedCart.splice(updatedCartIndex, 1);
    updatedCart.push({ updatedItem, quantity: 1 });
  } else {
    updatedCart[updatedCartIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    totalPrice: updatedPrice,
    totalQuantity: updatedQuantity,
  };
};
const removeProductsFromCart = (product, state) => {
  const updatedCart = [...state.cart];
  let updatedPrice = [...state.totalPrice];
  let updatedQuantity = [...state.totalQuantity];
  const updatedCartIndex = updatedCart.find(
    (item) => item?.id === product?._id
  );
  //const newCartItem = updatedCart?.filter((item) => item?.id !== product?.id);
  const updatedItem = { ...updatedCart[updatedCartIndex] };
  const newCartItem = updatedCart?.filter(
    (item) => item?.id !== updatedItem?._id
  );
  updatedPrice = updatedPrice - updatedItem.price * updatedItem.quantity;
  updatedQuantity = updatedQuantity - updatedItem.quantity;
  return {
    ...state,
    cart: newCartItem,
    totalPrice: updatedPrice,
    totalQuantity: updatedQuantity,
  };
};

const productIncrease = (state) => {
  let productQuantity = [...state.productQuantity];
  productQuantity = productQuantity + 1;
  return { ...state, productQuantity: productQuantity };
};

const productDecrease = (state) => {
  let productQuantity = [...state.productQuantity];
  productQuantity = productQuantity - 1 < 1 ? 1 : productQuantity - 1;
  return { ...state, productQuantity: productQuantity };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case REMOVE_PRODUCTS:
      return removeProductsFromCart(action.product, state);
    case INCREASE_PRODUCT_ID:
      return increaseProductID(action.productId, state);
    case PRODUCT_INCREASE:
      return productIncrease(state);
    case PRODUCT_DECREASE:
      return productDecrease(state);
    default:
      return state;
  }
};
