import React, { useState } from "react";
import Button from "./Button";
import Currency from "react-currency-formatter";
import styles from "../../../style";
import { useStateShopContext } from "../../../state/OnShopContext";
import { urlFor } from "../../../client";
import { BsShieldExclamation } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { GlobalModal } from "./GlobalModal";
import { Cancel } from "./buttons/CancelBTN";
const CheckoutProduct = ({ title, defaultProductVariant, _id, cartItem }) => {
  const { onRemove, totalQuantities, toggleCartItemsQuantities } =
    useStateShopContext();
  const { price, images } = defaultProductVariant;
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      {toggleModal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%]  z-50 md:inset-0 md:h-full">
          <div className="relative p-4 w-full mx-auto max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setToggleModal((prev) => !prev)}
              >
                <MdCancel className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <BsShieldExclamation className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" />

                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {`Are you sure you want to remove`} <span>{title}</span>
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={() => onRemove(cartItem)}
                >
                  Yes, I'm sure
                </button>
                <Cancel setToggleModal={setToggleModal} />
              </div>
            </div>
          </div>
        </div>
      )}
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
            // onClick={() => onRemove(cartItem)}
            onClick={() => setToggleModal((prev) => !prev)}
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
