import React from "react";
import styles from "../../../style";

const Author = () => {
  return (
    <>
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg blue__bg bg-opacity-20">
        <div className="absolute left-0 right-0  -top-14">
          <img
            src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
            alt="author_image"
            className="w-[100px] h-[100px]  align-middle rounded-full"
          />
        </div>
        {/** for author description and name  */}
        <p className={`${styles.span3}`}>wilson ibekason</p>
        <span className={`${styles.span3}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          natus cumque magni temporibus facere laudantium laborum perspiciatis
          esse saepe libero.
        </span>
      </div>
    </>
  );
};

export default Author;
