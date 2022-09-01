import { useReducer, useContext } from "react";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import { ACTION_TYPES } from "./actions";
import ShopContext from "./GlobalState";
export const ProductProvider = ({ children }) => {
  const {
    REMOVE_PRODUCTS,
    INCREASE_PRODUCT_ID,
    PRODUCT_INCREASE,
    PRODUCT_DECREASE,
  } = ACTION_TYPES;
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ];
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };
  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };
  const increaseProductID = (productId) => {
    setTimeout(() => {
      dispatch({ type: INCREASE_PRODUCT_ID, productId: productId });
    }, 700);
  };
  const removeProductsFromCart = (product) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCTS, product: product });
    }, 700);
  };
  const productDecrease = () => {
    setTimeout(() => {
      dispatch({ type: PRODUCT_DECREASE });
    }, 700);
  };
  const productIncrease = () => {
    setTimeout(() => {
      dispatch({ type: PRODUCT_INCREASE });
    }, 700);
  };
  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        totalPrice: cartState.totalPrice,
        totalQuantity: cartState.totalQuantity,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        removeProductsFromCart: removeProductsFromCart,
        increaseProductID: increaseProductID,
        productDecrease: productDecrease,
        productIncrease: productIncrease,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateProductContext = () => useContext(ShopContext);
