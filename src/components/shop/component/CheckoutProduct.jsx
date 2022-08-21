import React from "react";
import Button from "./Button";
import Currency from "react-currency-formatter";
import styles from "../../../style";
import { useStateShopContext } from "../../../state/OnShopContext";
import { urlFor } from "../../../client";
const CheckoutProduct = ({ title, defaultProductVariant, _id, cartItem }) => {
  const { onRemove, totalQuantities, toggleCartItemsQuantities } =
    useStateShopContext();
  const { price, images } = defaultProductVariant;

  return (
    <>
      <div className="grid grid-cols-5">
        <img
          // src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
          src={`${urlFor(images[0])}`}
          alt=""
          width={200}
          height={200}
          className="object-contain rounded shadow-sm"
        />

        <div className="col-span-3 mx-5">
          <h1 className={`${styles.span1}`}>{title}</h1>
          <h3>
            {" "}
            <Currency quantity={price} currency="GBP" />
          </h3>
        </div>

        {/* <div className>rtorororo</div> */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <div className="flex-1 flex-row border border-solid border-gray-500 rounded py-2">
            <span
              className="p-4 font-bold text-center"
              onClick={() => toggleCartItemsQuantities(_id, "decrease")}
            >
              -
            </span>
            <span className="p-4 font-bold text-center">{totalQuantities}</span>
            <span
              className="p-4 font-bold text-center"
              onClick={() => toggleCartItemsQuantities(_id, "increase")}
            >
              +
            </span>
          </div>
          <button
            type="button"
            onClick={() => onRemove(cartItem)}
            className={`border border-blue-400 text-gray-300 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
          >
            remove
          </button>{" "}
        </div>
        {/** right add and remove buttons */}
      </div>
    </>
  );
};

export default CheckoutProduct;
