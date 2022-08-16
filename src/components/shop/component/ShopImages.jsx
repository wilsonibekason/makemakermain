import React from "react";
import ShopImageCarousel from "./ShopImageCarousel";

const ShopImages = () => {
  return (
    <>
      <div className=" flex flex-col w-full md:w-10/12 ml-auto mr-auto px-4">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-2xl"
          src="https://media.istockphoto.com/photos/back-view-of-a-computer-programmer-at-work-picture-id1322180202?b=1&k=20&m=1322180202&s=170667a&w=0&h=XfnfiJ5GyTH9AefVCJL1fLgEVmfK8mEi96UppD9gy40="
        />
        <div className="gap-3 mt-4 ">
          <ShopImageCarousel />
        </div>
      </div>
    </>
  );
};

export default ShopImages;
