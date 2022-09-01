import React from "react";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";

const ImageItem = ({ image, myKey }) => {
  const { index, setIndex } = useStateShopContext();
  return (
    // <div className="mx-2">
    <img
      alt=""
      className="rounded blue__bg w-20 h-20 cursor-pointer mr-4 object-cover mx-2"
      src={urlFor(image).url()}
      // key={myKey}
      key={index}
      onMouseEnter={() => setIndex(index)}
    />
    // </div>
  );
};

export default ImageItem;
