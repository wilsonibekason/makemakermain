import React, { useState, useEffect, createContext, useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { createPopper } from "@popperjs/core";
import {
  addToBasket,
  removeFromBasket,
  selectItems,
} from "../slices/BasketSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { client } from "../client";

const ShopContext = createContext({});
export const ShopProvider = ({ children }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  // productdetails carousel effect
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  ///
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [productBanner, setProductBanner] = useState([]);

  // for randomizing ratings
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) * MIN_RATING)
  );
  // STATES FOR FILTERING PRODUCTS
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterProducts, setFilterProducts] = useState([]);
  const [animateFilter, setAnimateFilter] = useState("all");
  ////
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  //// dropdown state
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const btnRef = React.useRef();
  const popOverRef = React.useRef();
  ////___________________________SANITY CONNECT___________________///////
  useEffect(() => {
    let cancelled = false;
    const productQuery = '*[_type == "product"]';
    client
      .fetch(productQuery)
      .then((data) => {
        !cancelled && setProducts(data);
      })
      .catch((error) =>
        console.log(`SANITY ERROR SAYS --->  ${error?.details?.description} `)
      );
    const bannerQuery = '*[_type == "productBanner"]';
    client.fetch(bannerQuery).then((data) => {
      !cancelled && setProductBanner(data[0]);
    });
    return () => {
      console.log("products and productBanner fetched");
      cancelled = true;
    };
  }, []);

  console.log(products);
  const { name, email, review } = formData;
  const reviewSubmit = (e) => {
    e.preventDefault();
    setIsLoaded(true);
    const reviewDetails = {
      _type: "reviews",
      name,
      email,
      review,
    };
    client
      .create(reviewDetails)
      .then(() => {
        setIsReviewSubmitted(true);
        setIsLoaded(true);
        setFormData({
          name: "",
          email: "",
          review: "",
        });
      })
      .catch(
        (error) =>
          console.log(error?.response?.body?.error?.description) &&
          setIsLoaded(false)
      );
  };

  // handleopen dropdown
  const handleOpenDropDown = () => {
    createPopper(btnRef.current, popOverRef.current, {
      placement: "bottom-start",
    });
    setIsDropDownOpen(true);
  };
  ////_________ __________________SANITY CONNECT___________________///////
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

  //const items = useSelector(selectItems);
  // SECTION FOR FILTERING PRODUCTS

  const handleProductFilter = (productItem) => {
    setAnimateFilter(productItem);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (productItem === "all") {
        setFilterProducts(productBanner);
      } else {
        setFilterProducts(
          productBanner?.filter((product) =>
            product?.tags?.includes(productItem)
          )
        );
      }
    }, 500);
  };
  // SECTION FOR FILTERING PRODUCTS

  // FILTER BUTTON ACTIONS

  return (
    <ShopContext.Provider
      value={{
        BsStarFill,
        showCart,
        setShowCart,
        products,
        productBanner,
        handleProductFilter,
        animateFilter,
        animateCard,
        index,
        setIndex,
        rating,
        reviewSubmit,
        isLoaded,
        isReviewSubmitted,
        handleOpenDropDown,
        isDropDownOpen,
        btnRef,
        popOverRef,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateShopContext = () => useContext(ShopContext);
