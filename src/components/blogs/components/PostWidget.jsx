import React from "react";
import styles from "../../../style";

const PostWidget = () => {
  return (
    <>
      <div className="bg-white p-8 pb-12  shadow-sm mb-8">
        <h4 className={`${styles.span1}`}>Recent Post</h4>
        <div className="border-t bg-black mt-4 my-2" />
        <div className="flex flex-col mt-4">
          <div className={`${styles.paragraph2} w-full `}>
            What is Techology ..{" "}
          </div>
          <div className="flex flex-1 flex-row">
            <p className={`${styles.span1} mr-2`}>2 mins ago</p>
            <span className={`${styles.span1} mr-2`}>.</span>
            <span className={`${styles.span2} `}>9 mins Read</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWidget;
