import { createContext } from "react";
export default createContext({
  products: [{ id: 1, title: "wonderful shooe", price: 30 }],
  cart: [],
  productQuantity: 1,
  totalQuantity: 0,
  totalPrice: 0,
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  removeProductsFromCart: (product) => {},
  increaseProductID: (productID, value) => {},
  productIncrease: () => {},
  productDecrease: () => {},
});
