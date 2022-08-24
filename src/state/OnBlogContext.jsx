import { useState, useEffect, createContext, useContext } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { client } from "../client";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { useRef } from "react";
import { shopImages } from "../utils/data";
import {
  getBlogComments,
  postBlogQuery,
  getBlogCategories,
} from "../utils/GROC";
const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [DataLoaded, setDataLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  let count = 0;
  let slideInterval;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const { name, email, review } = formData;
  const reviewSubmit = (e) => {
    e.preventDefault();
    setIsLoaded(true);
    const reviewDetails = {
      _type: "comment",
      name,
      email,
      review,
    };
    client
      .create(reviewDetails)
      .then(() => {
        setIsReviewSubmitted(true);
        setIsLoaded(true);
        setFormData({
          name: "",
          email: "",
          review: "",
        });
      })
      .catch(
        (error) =>
          console.log(error?.response?.body?.error?.description) &&
          setIsLoaded(false)
      );
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  /*
const posts = await Sanity.fetch(`*[_type == 'post' && _id == '${currentPost.id}' ][0] {
  'currentPost': {
    ...
  },
  'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
  'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
}`);
const currentPostIndex = posts.findIndex(post => post.id === currentPost.id);
const previousPost = posts[currentPostIndex - 1];
const nextPost = posts[currentPostIndex + 1];
*/
  const handleCategoryFetch = () => {
    let blogQuery = postBlogQuery;
    client.fetch(blogQuery).then((data) => {
      setBlogs(data);
      if (data[0]) {
        let categoryQuery = getBlogCategories(data[0]?.specificCategory);
        client
          .fetch(categoryQuery)
          .then((data) => setBlogs(data) && setIsLoaded(true));
      }
    });
  };
  useEffect(() => {
    /// for generating blogs
    let cancelled = false;
    // const blogQuery = '*[_type == "post"]';
    // let blogQuery = postBlogQuery;
    // client.fetch(blogQuery).then((data) => {
    //   if (!cancelled) setBlogs(data);
    //   // else if (data[0]) {
    //   //   let categoryQuery = getBlogCategories(data[0]?.specificCategory);
    //   //   client
    //   //     .fetch(categoryQuery)
    //   //     .then((data) => !cancelled && setBlogs(data) && setIsLoaded(true));
    //   // }
    // });
    // if (!cancelled) handleCategoryFetch();
    // const posts = client.fetch()
    //// for local carousel logic
    //// fetch comments
    let commentQuery = getBlogComments();
    client
      .fetch(commentQuery)
      .then((data) => !cancelled && setComments(data?.[0]));

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
        setBlogs,
        // blog comments
        isLoaded,
        setIsLoaded,
        isReviewSubmitted,
        reviewSubmit,
        handleChange,
        name,
        email,
        review,
        handleCategoryFetch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
