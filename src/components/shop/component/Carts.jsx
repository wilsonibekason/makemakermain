import React from "react";
import { Header, Footer } from ".";
import { useNavigate } from "react-router-dom";
import Currency from "react-currency-formatter";

import styles, { shopLayout } from "../../../style";
import { emptyCart } from "../../../assets/assets";
import Button from "./Button";
import { useStateShopContext } from "../../../state/OnShopContext";
import CheckoutProduct from "./CheckoutProduct";

const Carts = () => {
  const navigate = useNavigate();
  const ShopNavigate = navigate("/product", { replace: true });
  const { cartItems, totalPrice } = useStateShopContext();
  console.log(cartItems);
  return (
    <>
      <div>
        <Header />
        <main className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12 mt-20">
          <div className="col-span-1 lg:col-span-9">
            <div className={`${shopLayout.cartSectionLayout}`}>
              <img
                src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
                alt=""
                width={1020}
                height={250}
                className=" object-contain rounded shadow-sm"
              />
              <div className={`${shopLayout.cartLayout}`}>
                <h1 className="font-poppins font-semibold text-xl text-black underline line-height-2 text-center capitalize">
                  your products summery
                </h1>
                {cartItems >= 0 && (
                  <div className="items-center ">
                    <img
                      src={emptyCart}
                      alt="empty_cart"
                      className="w-[600px] h-[300px] align-middle object-contain"
                    />
                    <Button
                      message="back to shop"
                      handleClick={ShopNavigate}
                    ></Button>
                  </div>
                )}

                {cartItems >= 1 &&
                  cartItems?.map((cartItem, index) => (
                    <CheckoutProduct
                      {...cartItem}
                      cartItem={cartItem}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 mx-4">
            <div className="border border-solid border-gray-400 mx-auto p-auto mt-4 rounded">
              <h1 className="text-center font-poppins font-semibold text-2xl uppercase">
                Order Summery
              </h1>
            </div>
            <div className="flex-1 flex flex-row justify-between">
              <div>
                <h1 className={`${styles.CheckoutHeading}`}>total</h1>
              </div>
              <div className={`${styles.CheckoutHeading}`}>
                {/* <Currency quantity={totalPrice} currency="GBP" /> */}
                {totalPrice}
              </div>
            </div>
            <div>
              <button
                type="button"
                className={`border border-blue-400 text-gray-300 mt-2 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full`}
              >
                checkout
              </button>
            </div>
          </div>
        </main>
        <div className="border-t bg-black" />
        <Footer />
      </div>
    </>
  );
};

export default Carts;
