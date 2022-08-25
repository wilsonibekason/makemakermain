import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../style";

const ShopWidgets = ({ blogs }) => {
  return (
    <>
      <div className="bg-white p-8 pb-12 mb-8">
        <h4 className={`${styles.span1}`}>Read Blogs On Our Platform </h4>
        {/** render the  related post */}
        {blogs?.length >= 1 &&
          blogs?.map((post, index) => {
            const { title, publishedAt, _id, slug } = post;
            return (
              <div className="flex flex-col mt-4">
                <Link to={`/blog/${slug?.current}`}>
                  <div className={`${styles.paragraph2} w-full `}>
                    {title}..{" "}
                  </div>
                </Link>
                <div className="flex flex-1 flex-row">
                  <p className={`${styles.span1} mr-2`}>2 mins ago</p>
                  <span className={`${styles.span1} mr-2`}>.</span>
                  <span className={`${styles.span2} `}>9 mins Read</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShopWidgets;
