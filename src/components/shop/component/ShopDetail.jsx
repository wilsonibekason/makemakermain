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
  const { rating, onAdd, decreQuantity, productQuantity, inQTY } =
    useStateShopContext();
  const { description, price } = defaultProductVariant;
  console.log(productDetail);
  return (
    <>
      <div className="w-full ml-auto mr-auto ">
        <div className="md:pr-12 mb-12">
          <h1 className=" text-2xl font-bold uppercase font-poppins">
            {title}
          </h1>
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
          <h4 className=" text-gray-500 text-sm font-semibold font-poppins">
            Description
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-2 font-poppins">
            {description}
          </p>
          <div className="flex flex-wrap">
            <div className="flex">
              <div className="w-1/2  h-12 px-4 border border-solid  shadow hover:shadow-lg my-4 py-3 bg-blue-gradient text-white active:bg-gray-600  ease-linear transition-all duration-150 rounded-l-lg">
                <h2 className="font-bold text-md font-poppins">Quantity</h2>
              </div>
              <div
                className="w-1/6 bg-blue-gradient h-12 px-4 border border-solid  shadow-md my-auto py-3 font-bold text-white mx-auto flex justify-center items-center text-3xl"
                onClick={decreQuantity}
              >
                -
              </div>
              <div className="w-1/6 bg-blue-gradient h-12 px-4 border border-solid   shadow-md my-4 py-3  font-bold flex justify-center items-center text-white">
                {productQuantity}
              </div>
              <div
                className="w-1/6 bg-blue-gradient h-12 px-4 border border-solid  shadow-md my-4 py-3 font-bold text-white flex justify-center items-center rounded-r-lg text-3xl"
                onClick={inQTY}
              >
                +
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => onAdd(productDetail, productQuantity)}
              type="button"
              className={` py-3 px-6 bg-blue-200 font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] active:bg-blue-400 shadow hover:shadow-lg focus:outline-none ease-linear transition-all duration-150 capitalize`}
              // bg-blue-gradient
            >
              add to cart
            </button>
            <button
              type="button"
              className={` py-3 px-6 bg-blue-200 font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] active:bg-blue-400 shadow hover:shadow-lg focus:outline-none ease-linear transition-all duration-150 capitalize`}
              // bg-blue-gradient
            >
              purchase now
            </button>
          </div>
          <ul className="list-none mt-6 mr-4">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                    <i className="fas fa-fingerprint"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm">
                    <span className="uppercase text-gray-600 font-medium font-poppins">
                      {" "}
                      categories
                    </span>{" "}
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
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                    <i className="fab fa-html5"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-poppins ">
                    WHEN TO BUY : Always available
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
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                    <i className="far fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-poppins">
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
