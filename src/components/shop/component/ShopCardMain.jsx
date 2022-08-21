import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";
import styles from "../../../style";
import Button from "./Button";
const MAX_RATING = 5;
const MIN_RATING = 1;
const ShopCardMain = () => {
  const { BsStarFill, products, onAdd, productQuantity } =
    useStateShopContext();
  // TODO:
  console.log("====================================");
  console.log(products);
  console.log("====================================");
  // destruture all products

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) * MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() * 0.5);
  return (
    <>
      {products &&
        products.map((product, index) => {
          const { title, defaultProductVariant, tags, slug } = product;
          const { images } = defaultProductVariant;
          const image = images[0];

          return (
            <div
              className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg"
              key={index}
            >
              <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
                {tags}
              </p>
              <Link to={`/product/${slug?.current}`}>
                <img
                  src={urlFor(image)}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain  hover:scale-110  ease-linear transition duration-150"
                />
              </Link>
              <h4 className={`${styles.span1} mt-2`}>{title}</h4>
              <div className="flex ">
                {Array(rating)
                  .fill()
                  .map((i, index) => (
                    <BsStarFill key={index} className="w-[12px] h-[12px]" />
                  ))}
              </div>
              <p className="text-xs my-2 line-clamp-2">
                {defaultProductVariant?.description
                  ? defaultProductVariant?.description
                  : "this is a portion for description"}
              </p>
              <div className="mb-5 ">
                <Currency
                  quantity={defaultProductVariant?.price}
                  currency="GBP"
                />
              </div>
              {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                  <img
                    src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs ">free next day delivery</p>
                </div>
              )}
              <button
                type="button"
                onClick={() => onAdd(product, productQuantity)}
                className={`border border-blue-400 text-gray-300 mt-2 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
              >
                add to cart
              </button>
            </div>
          );
        })}

      {/** button component */}
    </>
  );
};

export default ShopCardMain;
