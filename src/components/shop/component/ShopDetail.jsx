import React from "react";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { useStateShopContext } from "../../../state/OnShopContext";

const ShopDetail = ({
  title,
  defaultProductVariant,
  tags,
  slug,
  categories,
  productDetail,
}) => {
  const {
    rating,
    onAdd,
    totalQuantities,
    decreQuantity,
    productQuantity,
    inQTY,
  } = useStateShopContext();
  const { description, price } = defaultProductVariant;
  console.log(productDetail);
  return (
    <>
      <div className="w-full ml-auto mr-auto ">
        <div className="md:pr-12 mb-12">
          <h1 className=" text-2xl font-bold uppercase">{title}</h1>
          <div className="flex items-center mt-2.5 mb-5">
            {Array(rating)
              .fill()
              .map((i) => (
                <AiFillStar key={i} />
              ))}

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <h1 className=" text-2xl font-bold uppercase -mt-4">
            <Currency quantity={price} currency="GBP" />
          </h1>
          <h4 className=" text-gray-500 text-sm font-semibold">Description</h4>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap">
            <div className="flex">
              <div className="w-1/2  h-12 px-4 border border-solid  shadow hover:shadow-lg my-4 py-3 bg-gray-500 text-white active:bg-gray-600  ease-linear transition-all duration-150">
                <h2 className="font-bold text-md">Quantity</h2>
              </div>
              <div
                className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-auto py-3 font-bold  mx-auto"
                onClick={decreQuantity}
              >
                -
              </div>
              <div className="w-1/6 bg-gray-500 h-12 px-4 border border-solid   shadow-md my-4 py-3 font-bold">
                {productQuantity}
              </div>
              <div
                className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-4 py-3 font-bold text-gray-500"
                onClick={inQTY}
              >
                +
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => onAdd(productDetail, productQuantity)}
              className={`border border-blue-400 text-gray-300  active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
            >
              add to Cart
            </button>
            <button
              className="border border-gray-500 text-black active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                    <i className="fas fa-fingerprint"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">
                    <span className="uppercase text-red-200"> Date Added</span>{" "}
                    :{"  "}
                    <ul>
                      {tags &&
                        tags?.map((tag, index) => <li key={index}>{tag}</li>)}
                    </ul>
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                    <i className="fab fa-html5"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">
                    WHEN TO BUY : Alwats available
                    {/* {productDetails
                      ? productDetails?.saleTime
                      : "Always Available"} */}
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                    <i className="far fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">
                    No Discount For Now
                    {/* {ProductDetails?.discount
                      ? ProductDetails?.discount
                      : "No discount for now"} */}
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
