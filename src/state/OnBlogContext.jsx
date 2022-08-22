import { useState, useEffect, createContext, useContext } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { client } from "../client";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { useRef } from "react";
import { shopImages } from "../utils/data";
import { postBlogQuery } from "../utils/GROC";
const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [DataLoaded, setDataLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  let count = 0;
  let slideInterval;

  useEffect(() => {
    /// for generating blogs
    let cancelled = false;
    // const blogQuery = '*[_type == "post"]';
    let blogQuery = postBlogQuery;
    client.fetch(blogQuery).then((data) => !cancelled && setBlogs(data));
    //// for local carousel logic
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", clearSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      clearSlider();
      console.log("cancelled");
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        /// blogs
        blogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
