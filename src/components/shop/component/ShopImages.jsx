import React from "react";
import ShopImageCarousel from "./ShopImageCarousel";
import { useStateShopContext } from "../../../state/OnShopContext";
import { urlFor } from "../../../client";

const ShopImages = ({ defaultProductVariant }) => {
  const { index } = useStateShopContext();
  const { images } = defaultProductVariant;

  return (
    <>
      <div className=" flex flex-col w-full md:w-10/12 ml-auto mr-auto px-4">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-2xl"
          src={urlFor(images[index])}
        />
        <div className="gap-3 mt-4 ">
          <ShopImageCarousel images={images} />
        </div>
      </div>
    </>
  );
};

export default ShopImages;
