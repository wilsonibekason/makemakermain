import React from "react";
import styles from "../../style";
import { arrowUp } from "../../assets/assets";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col blue__bg w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[10px] leading-[23px] mr-2">
            <span className="text-white">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow_up"
            className="w-[24px] h-[23px] object-contain  "
          />
          <p className="font-poppins font-medium text-[10px] leading-[23px]">
            <span className="text-white">Started</span>
          </p>
        </div>
      </div>
      {/**  */}
    </div>
  );
};

export default GetStarted;
