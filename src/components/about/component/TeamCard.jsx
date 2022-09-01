import React, { useState } from "react";
import { BsBullseye, BsEyedropper, BsEyeglasses, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { urlFor } from "../../../client";
import styles from "../../../style";
const TeamCard = ({ cardDesc, cardImage, cardTitle }) => {
  const [enter, setEnter] = useState(false);
  return (
    <>
      <div
        className="flex-auto w-full lg:w-[25%]"
        onMouseEnter={() => setEnter((prev) => !prev)}
        onMouseLeave={() => setEnter(false)}
      >
        <div className="w-full">
          <div
            className="relative max-w-full h-auto border-4 rounded-xl bg-center bg-cover bg-no-repeat shadow-lg"
            style={{
              backgroundImage: `url("${urlFor(cardImage)}")`,

              width: 800,
              height: 450,
            }}
          >
            <div
              className={`flex flex-row flex-wrap justify-around absolute left-[56px] ${
                !enter ? "bottom-0" : "bottom-4"
              }  w-[70%] h-[20%] mx-auto bg-white border-4 border-solid rounded-t-lg shadow-lg transition-all ease-linear duration-150 `}
            >
              <div className="flex flex-col flex-1 flex-start  my-auto ml-8">
                <h4
                  className={`${styles.span1} hover:text-black active:text-black`}
                >
                  {cardTitle}
                </h4>
                <p className={`${styles.span1}`}>{cardDesc}</p>
              </div>
              <div className="flex justify-center items-center mr-4">
                <BsEyedropper className="w-8 h-8 " />
              </div>
            </div>

            <div
              className={`${
                enter ? "flex" : "hidden"
              } absolute left-[80%] w-full h-full  flex-col mt-8 transition-all ease-linear duration-200 `}
            >
              <div className="bg-blue-400 rounded-full border-2 w-10 h-10 flex justify-center items-center mr-4 mb-2">
                <FaFacebook className="flex justify-center items-center text-white" />
              </div>
              <div className="bg-blue-400 rounded-full border-2 w-10 h-10 flex justify-center items-center mr-4 mb-2">
                <BsTwitter className="flex justify-center items-center text-white" />
              </div>
              <div className="bg-blue-400 rounded-full border-2 w-10 h-10 flex justify-center items-center mr-4 mb-2">
                <BsLinkedin className="flex justify-center items-center text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row flex-wrap justify-around absolute bottom-0 w-[30%] h-[20%] mx-auto bg-white border-4 border-solid rounded-t-lg shadow-lg">
        <div className="flex flex-col flex-1 flex-start  my-auto ml-8">
          <h4
            className={`font-raleway font-semibold text-xl md:text-2xl text-gray-600 `}
          >
            wilson ibekason
          </h4>
          <p className={`${styles.span1}`}>fullstack developer</p>
        </div>
        <div className="flex justify-center items-center mr-4">
          <BsEyedropper className="w-12 h-12 " />
        </div>
      </div> */}
    </>
  );
};

export default TeamCard;
