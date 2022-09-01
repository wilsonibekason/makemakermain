import { createContext } from "react";
export default createContext({
  products: [{ id: 1, title: "wonderful shooe", price: 30 }],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
