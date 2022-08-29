import React from "react";
import { BsBullseye, BsEyedropper, BsEyeglasses } from "react-icons/bs";
import styles from "../../../style";
const TeamCard = () => {
  return (
    <>
      <div
        className="relative w-[450px] h-[500px] border-4 rounded-xl bg-center bg-cover bg-no-repeat shadow-lg"
        style={{
          backgroundImage: `url("https://i0.wp.com/optimizeseo.co.uk/wp-content/uploads/2020/02/Emmanuel-eluwa-940x1000.jpg?resize=940%2C1000&ssl=1")`,
        }}
      >
        <div className="flex flex-row flex-wrap justify-around absolute left-16 bottom-0 w-[70%] h-[20%] mx-auto bg-white border-4 border-solid rounded-t-lg shadow-lg">
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
        </div>
        <div className=" absolute left-[90%] w-full h-full flex flex-col mt-8">
          <BsBullseye className="text-white text-3xl font-semibold my-1" />
          <BsBullseye className="text-white text-3xl font-semibold my-1" />
          <BsBullseye className="text-white text-3xl font-semibold my-1" />
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
