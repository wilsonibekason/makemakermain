import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useStateShopContext } from "../../../state/OnShopContext";
import styles from "../../../style";
import Button from "./Button";
const MAX_RATING = 5;
const MIN_RATING = 1;
const ShopCardMain = () => {
  const { BsStarFill } = useStateShopContext();
  /**
     * const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

console.log(priceSplitter(72500));
     */
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) * MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() * 0.5);
  return (
    <>
      <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
          science and CAD
        </p>
        <img
          src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
          alt=""
          width={200}
          height={200}
          className="object-contain  hover:scale-110  ease-linear transition duration-150"
        />
        <h4 className={`${styles.span1} mt-2`}>web development</h4>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <BsStarFill key={index} className="w-[12px] h-[12px]" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officiis.
        </p>
        <div className="mb-5 ">
          <Currency quantity={4990} currency="GBP" />
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
      {/** button component */}
    </>
  );
};

export default ShopCardMain;
