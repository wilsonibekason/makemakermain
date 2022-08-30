import React from "react";
import styles, { blogLayout } from "../../../style";

const Categories = ({ products }) => {
  console.log("your category lists", products);
  return (
    <>
      <div className={`${blogLayout.section}`}>
        <h4 className={`${styles.span1}`}> Tags & Categories</h4>
        <div className="border-t bg-black mt-4 my-2" />
        {products &&
          products?.map((category) => (
            <div className="flex flex-row justify-between mb-1">
              {/* {category?.productCategories
                ?.sort((a, b) => a - b)
                .map((categoryItem) => (
                  <div>
                    <p className={`${styles.paragraph2}`}>
                      {categoryItem?.category}
                    </p>
                  </div>
                ))} */}
              <div className="">
                <p className={`${styles.paragraph2} `}>
                  {category?.specificCategory}
                </p>
              </div>
              <div className="bg-blue-500 rounded-full flex items-center justify-center">
                <p className="font-semidold text-[9px] px-3 ">9</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
