import React from "react";
import styles, { blogLayout } from "../../../style";

const Categories = () => {
  return (
    <>
      <div className={`${blogLayout.section}`}>
        <h4 className={`${styles.span1}`}> Tags & Categories</h4>
        <div className="border-t bg-black mt-4 my-2" />
        <div className="flex flex-row justify-between">
          <div>
            <p className={`${styles.paragraph2}`}>Technology</p>
          </div>
          <div className="bg-blue-500 rounded-full items-center">
            <p
              className={` text-white cursor-pointer font-poppins text-[16px]  
          py-1 px-1`}
            >
              9
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
