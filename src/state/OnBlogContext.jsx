import { useState, useEffect, createContext, useContext } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { useRef } from "react";
import { shopImages } from "../utils/data";
const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [DataLoaded, setDataLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  let count = 0;
  let slideInterval;

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", clearSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      clearSlider();
    };
    // eslint-disable-next-line
  }, []);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNext();
    }, 5000);
  };

  const clearSlider = () => {
    clearInterval(slideInterval);
  };

  const handlePrevSlide = () => {
    const productBannerLength = shopImages.length;
    count = (currentIndex + productBannerLength - 1) % productBannerLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add(".fade-anim");
  };

  const handleNextSlide = () => {
    const productBannerLength = shopImages.length;
    count = (currentIndex + productBannerLength + 1) % productBannerLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add(".fade-anim");
  };

  const handleOnNext = () => {
    count = (count + 1) % shopImages.length;
    setCurrentIndex(count);
    slideRef.current?.classList?.add("fade-anim");
  };
  return (
    <BlogContext.Provider
      value={{
        DataLoaded,
        BsArrowRightCircleFill,
        AiOutlineLike,
        shopImages,
        currentIndex,
        handleNextSlide,
        handleOnNext,
        handlePrevSlide,
        slideRef,
        TbPlayerTrackNext,
        TbPlayerTrackPrev,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
