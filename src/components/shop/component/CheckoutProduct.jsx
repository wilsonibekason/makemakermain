import React from "react";
import Button from "./Button";
import { useStateShopContext } from "../../../state/OnShopContext";
const CheckoutProduct = () => {
  const { productQuantities } = useStateShopContext();
  //TODO:
  console.log("cart details");
  return (
    <>
      <div className="grid grid-cols-5">
        <img
          src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
          alt=""
          width={200}
          height={200}
          className="object-contain rounded shadow-sm"
        />

        <div className="col-span-3 mx-5">
          <h1>dedjdjd</h1>
        </div>

        {/* <div className>rtorororo</div> */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <Button message={"add to cart"} />
          <Button message={"remove "} />
        </div>
        {/** right add and remove buttons */}
      </div>
    </>
  );
};

export default CheckoutProduct;
