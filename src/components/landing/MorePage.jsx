import React from "react";
import { Link } from "react-router-dom";
import { quotes } from "../../assets/assets";
import styles from "../../style";

const MorePage = ({ content, title, name, img, link }) => {
  return (
    // <div className="flex justify-between flex-col px-10 py-12 rounded-[25px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    //   <img
    //     src={quotes}
    //     alt="double_quotes"
    //     className="w-[42px] h-[27px] object-contain"
    //   />
    //   <p className="font-poppins font-medium text-[10px] leading-[23px] text-white my-10">
    //     {content}
    //   </p>
    //   {/** author testimonials */}
    //   <div className="flex flex-row ">
    //     <img
    //       src={img}
    //       alt="author_hope"
    //       className="w-[48px] h-[48px] rounded-full"
    //     />
    //     <div className="flex flex-col ml-4">
    //       <h4 className="font-poppins font-semibold text-[20px] leading-[20px] text-white ">
    //         {name}
    //       </h4>
    //       <h4 className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
    //         {title}
    //       </h4>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full lg:w-4/12 px-4 ">
      <h5
        className={`font-poppins font-semibold text-[20px] leading-[25px] text-white my-10 uppercase text-center`}
      >
        {title}
      </h5>
      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-200 feedback-card">
        <p
          className={`${styles.paragraph}  max-w-[470px] absolute top-[50%] left-[35%] transform translate-x-1 text-center text-white`}
        >
          {title}
        </p>
        <Link to={`${link}`}>
          <img
            src={img}
            // src={
            //   "https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
            // }
            alt={title}
            className="align-middle border-none max-w-full h-auto rounded-lg hover:scale-105 hover:opacity-[0.03] hover:backdrop-blur-sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default MorePage;
