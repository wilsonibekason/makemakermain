import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles from "../../../style";

const CommentForm = () => {
  const {
    AiOutlineLike,
    isLoaded,
    isReviewSubmitted,
    reviewSubmit,
    handleChange,
    name,
    email,
    review,
    error,
  } = useStateBlogContext();

  const timer = setTimeout(() => {
    return (
      <h1 className="text-lg lg:text-2xl font-robotoCondensed font-semibold text-red-400 text-center capitalize ">
        Invalid Input
      </h1>
    );
  }, 3000);
  clearTimeout(timer);
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 p-4">
        <h3 className={`${styles.heading3} w-full sm:text-md sm:w-full `}>
          Comment Section
        </h3>
        {!isReviewSubmitted ? (
          <>
            <div className="grid grid-cols-1  gap-12">
              {/** send message inbox */}
              <div class="relative flex w-full flex-wrap items-stretch my-4">
                <textarea
                  rows={3}
                  cols={6}
                  type="text"
                  placeholder="type in your review ..."
                  class="px-2 py-1 placeholder-gray-300 text-gray-600 bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                  name="review"
                  value={review}
                  onChange={handleChange}
                />
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
            {/** name and email inbox */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {/**EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                class="px-2 py-1 placeholder-gray-300 text-gray-600
                      bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter Your Name"
                class="px-2 py-1 placeholder-gray-300 text-gray-600
                      bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                name="name"
                value={name}
                required
                onChange={handleChange}
              />
            </div>
            {/** store in localStorage access */}
            <div className="grid grid-cols-1 gap-4 mb-8 ">
              <button
                className=" border border-blue-500 text-gray-600 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={reviewSubmit}
              >
                {isLoaded ? "Submitting " : "Submit Comment"}
              </button>
            </div>
          </>
        ) : (
          <h1 className="text-lg lg:text-2xl font-robotoCondensed font-semibold text-gray-400 text-center capitalize ">
            Thanks for your Feedback
          </h1>
        )}
        {error && timer}
      </div>
    </>
  );
};

export default CommentForm;
