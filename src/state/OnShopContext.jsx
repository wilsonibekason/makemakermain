import { useState, useEffect, createContext, useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import {
  addToBasket,
  removeFromBasket,
  selectItems,
} from "../slices/BasketSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { urlFor, client } from "../client";

const ShopContext = createContext({});
export const ShopProvider = ({ children }) => {
  const dispatch = useDispatch();
  ///
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [productBanner, setProductBanner] = useState([]);

  ////___________________________SANITY CONNECT___________________///////
  useEffect(() => {
    let cancelled = false;
    const productQuery = '*[_type == "product"]';
    client.fetch(productQuery).then((data) => {
      !cancelled && setProducts(data);
    });
    const bannerQuery = '*[_type == "productBanner"]';
    client.fetch(bannerQuery).then((data) => {
      !cancelled && setProductBanner(data);
    });
    return () => {
      console.log("products and productBanner fetched");
      cancelled = true;
    };
  }, []);

  console.log(products);
  ////___________________________SANITY CONNECT___________________///////
  // const handleAddToBasket = () => {
  //   const product = {
  //     id,
  //     name,
  //     title,
  //   };
  //   // sending product in to the redux store
  //   dispatch(addToBasket(product));
  // };
  // const handleItemAdd = () => {
  //   const product = {
  //     id,
  //     name,
  //     title,
  //   };
  //   dispatch(addToBasket(product));
  // };

  // const removeItem = () => {
  //   dispatch(removeFromBasket({ id }));
  // };
  //
  /**
     * const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

console.log(priceSplitter(72500));
     */
  const items = useSelector(selectItems);
  return (
    <ShopContext.Provider
      value={{ BsStarFill, showCart, setShowCart, products, productBanner }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateShopContext = () => useContext(ShopContext);
