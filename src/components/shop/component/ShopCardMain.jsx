import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";
import styles from "../../../style";
import Button from "./Button";
const MAX_RATING = 5;
const MIN_RATING = 1;
const ShopCardMain = () => {
  const { BsStarFill, products } = useStateShopContext();
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
          const { title, defaultProductVariant, tags } = product;
          const { description, images, tax, price, grams, barcode } =
            defaultProductVariant;
          const image = images[0];
          console.log(images[0]);

          return (
            <div
              className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg"
              key={index}
            >
              <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
                {tags}
              </p>
              <img
                src={urlFor(image)}
                alt=""
                width={200}
                height={200}
                className="object-contain  hover:scale-110  ease-linear transition duration-150"
              />
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
              <Button message="add to cart" mt="4" />
            </div>
          );
        })}

      {/** button component */}
    </>
  );
};

export default ShopCardMain;
