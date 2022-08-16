import React, { useEffect, useRef, useState } from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { shopImages } from "../../../utils/data";
const BannerShop = () => {
  const {
    shopImages,
    currentIndex,
    handleNextSlide,
    handlePrevSlide,
    handleOnNext,
    slideRef,
    TbPlayerTrackNext,
    TbPlayerTrackPrev,
  } = useStateBlogContext();

  return (
    <>
      <div ref={slideRef} className="w-full select-none relative">
        <div className="aspect-w-16 aspect-h-7">
          <img src={shopImages[currentIndex]} alt="" />
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handlePrevSlide}
          >
            <TbPlayerTrackPrev />
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          >
            <TbPlayerTrackNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerShop;
