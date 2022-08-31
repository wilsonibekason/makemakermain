import React from "react";
import styles, { blogLayout } from "../../../style";
import { useStateBlogContext } from "../../../state/OnBlogContext";

const Categories = ({ tags }) => {
  const { oldPosts } = useStateBlogContext();

  return (
    <>
      <div className={`${blogLayout.section}`}>
        <h4 className={`${styles.span1}`}> Tags & Categories</h4>
        {oldPosts &&
          oldPosts?.length >= 1 &&
          oldPosts?.map((post) =>
            post?.tags?.map((tag, index) => (
              <>
                <div className="flex flex-row justify-between " key={index}>
                  <div>
                    <p className={`${styles.paragraph2}`}>{tag}</p>
                  </div>
                  <p className="bg-blue-500 rounded-full text-white cursor-pointer font-poppins  w-[26px] h-[26px] mr-[6px] text-center">
                    6
                  </p>
                </div>
              </>
            ))
          )}
        <div className="border-t bg-black mt-4 my-2" />
        <h4 className={`${styles.span1}`}>Blog View Tags & Categories</h4>

        {/**show categories */}
        {tags?.map((tag, index) => (
          <>
            <div className="flex flex-row justify-between " key={index}>
              <div>
                <p className={`${styles.paragraph2}`}>{tag}</p>
              </div>

              <p className="bg-blue-500 rounded-full text-white cursor-pointer font-poppins  w-[26px] h-[26px] mr-[6px] text-center">
                6
              </p>
            </div>
          </>
        ))}

        {/**show categories */}
      </div>
    </>
  );
};

export default Categories;
