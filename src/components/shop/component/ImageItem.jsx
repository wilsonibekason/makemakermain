import React from "react";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";

const ImageItem = ({ image }) => {
  const { index, setIndex } = useStateShopContext();
  return (
    <div className="mx-2">
      <img
        alt=""
        className="rounded bg-red-500 w-20 h-20 cursor-pointer mr-4 object-cover"
        //src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
        src={urlFor(image).url()}
        onMouseEnter={() => setIndex(index)}
      />
    </div>
  );
};

export default ImageItem;
