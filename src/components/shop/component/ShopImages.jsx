import React from "react";
import ShopImageCarousel from "./ShopImageCarousel";
import { useStateShopContext } from "../../../state/OnShopContext";
import { urlFor } from "../../../client";

const ShopImages = ({ defaultProductVariant }) => {
  const { index, setIndex } = useStateShopContext();
  const { images } = defaultProductVariant;

  return (
    <>
      <div className=" flex flex-col w-full md:w-10/12 ml-auto mr-auto px-4">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-2xl"
          src={urlFor(images[index])}
        />
        <div className="gap-3 mt-4 flex flex-row mx-auto  ">
          {/* <ShopImageCarousel images={images} /> */}
          {images &&
            images?.map((image, index) => (
              <img
                alt=""
                className="rounded blue__bg w-20 h-20 cursor-pointer mr-4 object-cover mx-2"
                src={urlFor(image).url()}
                // key={myKey}
                key={index}
                onMouseEnter={() => setIndex(index)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopImages;
