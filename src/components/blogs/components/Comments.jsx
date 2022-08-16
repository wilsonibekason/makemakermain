import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles, { blogLayout } from "../../../style";

const Comments = () => {
  const { AiOutlineLike } = useStateBlogContext();
  return (
    <>
      <div className={`${blogLayout.section2} `}>
        <h3 className={` text-xl font-poppins font-medium green__txt `}>
          5 Comments
        </h3>
        {/** MAIN POST DETAILS  */}
        <div className="border-t bg-black mt-4 my-2 " />
        {/** author name */}
        <div className="flex flex-row flex-wrap space-x-2 mb-4">
          <div className="">
            <img
              src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
              alt=""
              className="w-[30px] h-[30px] rounded-full mr-3"
            />
          </div>
          <div className={`flex flex-1 flex-col -mt-1`}>
            <div>
              <span className={`${styles.span2}`}>wilson ibekason</span>
            </div>
            <div className="-mt-2">
              <span className={`${styles.span2} `}>20-2-2003</span>
            </div>
          </div>
        </div>
        {/** comment */}
        <p
          className="font-poppins font-medium text-xs md:text-[12px] text-black w-full
        "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          vitae?
        </p>
        <div className="flex flex-row flex-wrap justify-between my-2">
          <div>
            <AiOutlineLike className="w-[30px] h-[30px]" />
          </div>
          <div>hello</div>
        </div>
      </div>
    </>
  );
};

export default Comments;
