import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles, { layout } from "../../../style";
const PostCard = () => {
  const { BsArrowRightCircleFill, products } = useStateBlogContext();
  console.log("====================================");
  console.log(products);
  console.log("====================================");
  return (
    <>
      <div className="hidden lg:block md:block bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8 shadow">
        {/** image section */}
        <div className="relative overflow-hidden  pb-80 mb-6">
          <img
            src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
            alt=""
            className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        {/** end of image section */}
        <div>
          <h1 className={`${styles.BlogHeading1} text-center`}>
            Lorem ipsum dolor sit.
          </h1>
        </div>
        <div className="flex-1 flex flex-row justify-evenly">
          <p className={`${styles.span1}`}>2 days ago</p>
          <h1 className={`${styles.span1}`}>9 minutes read</h1>
          <span className={`${styles.span2}`}>educational website</span>
        </div>
        <p className={`${styles.paragraph2} max-w-full mt-5 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          sequi ducimus iste, tempora iusto voluptate.
        </p>
        <div className="flex-1 flex flex-wrap items-center">
          <BsArrowRightCircleFill className="w-[13px] h-[13px] mr-2" />
          <p className={`${styles.span2}${styles.transitionTextEffect}`}>
            read more
          </p>
        </div>
        <div className="border-t bg-black mt-4 my-2" />
        <div className="flex  justify-between">
          <div className="flex-1 flex flex-wrap items-center">
            <img
              src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
              alt=""
              className="w-[30px] h-[30px] rounded-full mr-3"
            />
            <p className={`${styles.span1} `}>
              By <span className={`${styles.span2}`}>wilson ibekason</span>
            </p>
          </div>
          <div className={`${styles.span2}`}>save post</div>
        </div>
      </div>
      {/** small device postcard component */}
      <div className=" block md:hidden lg:hidden bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8  ">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <img
            src={""}
            alt=""
            className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>

        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <a href={`/post/`}>dkddkd</a>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
            <img
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={""}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              jddjdjddj
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {/* {moment(post.createdAt).format('MMM DD, YYYY')} */}
              20020-2002-22
            </span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          'dpd
        </p>
        <div className="text-center">
          <a href={`/post/`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Reading
            </span>
          </a>
        </div>
      </div>
      {/** small device postcard component */}
    </>
  );
};

export default PostCard;
