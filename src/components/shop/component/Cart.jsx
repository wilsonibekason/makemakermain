import React from "react";
import { Header, Footer } from ".";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { shopLayout } from "../../../style";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import CheckoutProduct from "./CheckoutProduct";

const Cart = () => {
  const { showCart, setShowCart } = useStateBlogContext();
  return (
    <>
      <Header />
      <div className="mb-16 bg-gray-400" />
      <div className={` ${shopLayout.cartSection} max-w-screen-xl`}>
        {/** right side */}
        <div className={`${shopLayout.cartSectionLayout}`}>
          <img
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            alt=""
            width={1020}
            height={250}
            className=" object-contain"
          />
          <div className={`${shopLayout.cartLayout}`}>
            <h1>helo world</h1>
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
        </div>
        {/** left side */}
        <div className="bg-black" />
      </div>
      <div className="mx-4">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
