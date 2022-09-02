import React from "react";
// import styles from "../../../style";
import { BsBoxArrowInRight } from "react-icons/bs";
import { urlFor } from "../../../client";
import { GiStrongMan } from "react-icons/gi";

const ValueCard = ({ bgImage, title, description, iconImage }) => {
  return (
    <>
      <div class="w-[350px] h-[300px] bg-transparent cursor-pointer group perspective ">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            class="absolute backface-hidden border-2 w-full h-full bg-no-repeat bg-cover rounded-lg shadow opacity-50 backdrop-opacity-10 backdrop-blur-md "
            style={{
              //backgroundImage: `url("https://www.legalcheek.com/wp-content/uploads/2018/11/stem-student.jpeg")`,
              backgroundImage: `url("${urlFor(bgImage)}")`,
            }}
          ></div>
          <div className="absolute flex flex-col rounded-lg p-4 items-center justify-center w-full h-full ">
            <div className="mb-4">
              <GiStrongMan className="text-white w-10 h-10" />
            </div>
            <h1
              className={`font-raleway font-bold text-4xl text-white capitalize`}
            >
              {title}
            </h1>
            <div className="mt-4">
              <BsBoxArrowInRight className="text-white w-10 h-10" />
            </div>
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-lg ">
            <div class="text-center flex flex-col items-center justify-center h-full blue__bg px-2 py-auto px-auto">
              <p className="font-poppins font-medium text-lg text-white">
                {description}
              </p>
              {/* <button class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Watch Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueCard;
