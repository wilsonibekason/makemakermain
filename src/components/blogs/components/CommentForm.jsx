import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles from "../../../style";

const CommentForm = () => {
  const { AiOutlineLike } = useStateBlogContext();
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 p-4">
        <h3 className={`${styles.heading3} w-full sm:text-md sm:w-full `}>
          Comment Section
        </h3>
        <div className="grid grid-cols-1  gap-12">
          {/** send message inbox */}
          <div class="relative flex w-full flex-wrap items-stretch my-4">
            <textarea
              rows={3}
              cols={6}
              type="text"
              placeholder="type in your review ..."
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              name="review"
              // value={review}
              // onChange={handleChange}
            />
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
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
            class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            name="email"
            // value={email}
            // required
            // onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            name="text"
            // value={email}
            // required
            // onChange={handleChange}
          />
        </div>
        {/** store in localStorage access */}
        <div className="grid grid-cols-1 gap-4 mb-8 ">
          <button
            className=" border border-blue-500 text-blueGray-600 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
