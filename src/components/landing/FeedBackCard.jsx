import React from "react";
import { quotes } from "../../assets/assets";

const FeedBackCard = ({ content, title, name, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-medium text-[10px] leading-[23px] text-white my-10">
        {content}
      </p>
      {/** author testimonials */}
      <div className="flex flex-row ">
        <img
          src={img}
          alt="author_hope"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[20px] text-white ">
            {name}
          </h4>
          <h4 className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
