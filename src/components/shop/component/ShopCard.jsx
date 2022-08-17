import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles from "../../../style";
const ShopCard = () => {
  const { products } = useStateBlogContext();
  console.log(products);
  console.log(products.title);
  return (
    <>
      <div className="relative h-72">
        <div
          className="absolute rounded bg-center bg-no-repeat bg-cover shadow-sm inline-block w-72 h-72"
          style={{
            backgroundImage: `url("https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg")`,
          }}
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-72 h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-72 h-full">
          <div className="flex flex-wrap  absolute bottom-0 w-72 justify-center ">
            <div className="flex">
              <div className="w-1/4 h-12 px-4 py-3 border border-solid shadow blue__bg">
                <p className={`${styles.span2} `}> heelof</p>
              </div>
              <div className="w-2/4 h-12 px-8 py-2 border border-solid shadow  green__bg">
                <span className=" uppercase text-xs font-robotoCondensed  text-center ">
                  out of stock
                </span>
              </div>
              <div className="w-1/4 h-12 px-4 py-3 border border-solid shadow blue__bg">
                <p className={`${styles.span2} text-center`}> heelof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
