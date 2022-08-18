import React, { useState, useEffect, createContext, useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { createPopper } from "@popperjs/core";
import { toast } from "react-hot-toast";
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
  // cart logic stats
  // LOGIC STATES
  // const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  // LOGIC STATES

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

  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  let itemIndex;
  let foundProduct;
  //-----------------------ADDING LOGIC---------------------//
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item?._id === product?._id
    );
    setTotalPrice((previousPrice) => previousPrice + product?.price * quantity);
    setTotalQuantities((previousQuantity) => previousQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct?._id == product?._id) {
          return { ...cartItems, quantity: cartProduct?.quantity + quantity };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product?.title} added to the cart`);
  };
  //-----------------------ADDING LOGIC---------------------//

  //-----------------------REMVING LOGIC---------------------//
  const onRemove = (product) => {
    foundProduct = cartItems?.find((item) => item?._id === product?._id);
    const newCartItem = cartItems?.filter((item) => item?._id !== product?._id);
    setTotalPrice(
      (previousPrice) =>
        previousPrice - foundProduct?.price * foundProduct?.quantity
    );
    setTotalQuantities(
      (previousQuantity) => previousQuantity - foundProduct?.quantity
    );
    setCartItems(newCartItem);
    toast.success(
      `${foundProduct?.quantity} ${product?.title} removed from the cart`
    );
  };
  //-----------------------REMOVING LOGIC---------------------//
  //-----------------------CART_ITEMS TOGGLE LOGIC---------------------//

  const toggleCartItemsQuantities = (id, value) => {
    foundProduct = cartItems?.find((item) => item._id === id);
    itemIndex = cartItems.findIndex((product) => product?._id === id);
    const newCartItem = cartItems.filter((item) => item?._id != id);
    if (value === "increase") {
      let newCartItems = [
        ...newCartItem,
        {
          ...foundProduct,
          quantity: foundProduct?.quantity + 1,
        },
      ];
      setCartItems(newCartItems);
      setTotalPrice((previousPrice) => previousPrice + foundProduct?.price);
      setTotalQuantities((previousQuantity) => previousQuantity + 1);
    } else if (value === "decrease") {
      if (foundProduct?.quantity > 1) {
        let newCartItems = [
          ...newCartItem,
          {
            ...foundProduct,
            quantity: foundProduct?.quantity - 1,
          },
        ];
        setCartItems(newCartItems);
        setTotalPrice((previousPrice) => previousPrice - foundProduct?.price);
        setTotalQuantities((previousQuantity) => previousQuantity - 1);
      }
    }
  };
  //-----------------------CART_ITEMS TOGGLE LOGIC---------------------//
  //-----------------------ADDING LOGIC---------------------//
  const increaseQuantity = () => {
    let newCartItem = {
      ...cartItems[0],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalPrice((previousPrice) => previousPrice + (cartItems.length - 1));
  };

  const increQty = () => {
    let newCartItem = {
      ...cartItems[cartItems.length - 1],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalQuantities((previousQuantity) => previousQuantity + 1);
    setTotalPrice(0);
  };
  // ----------------------- MAIN INCREASE LOGIC---------------------//
  const inQTY = () => {
    setProductQuantity((previousQuantity) => previousQuantity + 1);
  };
  //-----------------------MAIN INCREASE LOGIC---------------------//
  const decreaseQuantity = () => {
    let newCartItem = {
      ...cartItems[0],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalPrice((previousPrice) => previousPrice - (cartItems.length - 1));
  };
  //----------------------- MAIN DECREASE LOGIC---------------------//
  const decreQuantity = () => {
    setProductQuantity((previousQuantity) =>
      previousQuantity - 1 < 1 ? 1 : previousQuantity - 1
    );
  };
  //-----------------------MAIN DECREASE LOGIC---------------------//
  //-----------------------increase && decrease products  LOGIC---------------------//

  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  ////////// ***************************************************************************************    REVIEWS MAIN LOGIC ***************************************** ///////////////
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
        // ecommerce logic
        onAdd,
        decreQuantity,
        decreaseQuantity,
        increQty,
        increaseQuantity,
        inQTY,
        totalPrice,
        totalQuantities,
        productQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateShopContext = () => useContext(ShopContext);
