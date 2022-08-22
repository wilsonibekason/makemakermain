import React from "react";
import styles, { blogLayout } from "../../../style";

const Categories = ({ tags }) => {
  return (
    <>
      <div className={`${blogLayout.section}`}>
        <h4 className={`${styles.span1}`}> Tags & Categories</h4>

        <div className="border-t bg-black mt-4 my-2" />
        {/**show categories */}
        {tags?.map((tag, index) => (
          <>
            <div className="flex flex-row justify-between " key={index}>
              <div>
                <p className={`${styles.paragraph2}`}>{tag}</p>
              </div>
              {/* <div className="bg-blue-500 rounded-full items-center">
                <p
                  className={` text-white cursor-pointer font-poppins text-[16px]  
                py-1 px-1`}
                >
                  9
                </p>
              </div> */}
              <p className="bg-blue-500 rounded-full text-white cursor-pointer font-poppins  w-[26px] h-[26px] mr-[6px] text-center">
                6
              </p>
            </div>
            {/* <ul className="list-none flex flex-row justify-center align-center">
              <div className=" flex">
                <li className={`${styles?.span2} mr-4`}>science</li>
                <li className={`${styles?.span2} mr-4`}>science</li>
                <li className={`${styles?.span2} mr-4`}>science</li>
                <li className={`${styles?.span2} mr-4`}>science</li>
                <li className={`${styles?.span2} mr-4`}>science</li>
              </div>
            </ul> */}
          </>
        ))}

        {/**show categories */}
      </div>
    </>
  );
};

export default Categories;
