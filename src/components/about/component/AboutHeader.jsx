import React from "react";
import styles from "../../../style";

const AboutHeader = () => {
  return (
    <>
      <div className="relative max-h-[100vh] min-h-[70vh]">
        <div
          className="bg-cover bg-no-repeat bg-scroll bg-[bottom_center_0px] bg-[#f2f2f4] min-h-[300px] mb-[60px] pt-28 pb-12"
          style={{
            backgroundImage: `url("https://optimizeseo.co.uk/wp-content/uploads/2020/02/blog_page-title.jpg")`,
          }}
        ></div>
        <div className="absolute top-[20%] left-[40%] ">
          <h2
            className={`text-5xl text-white font-raleway font-medium capitalize text-center `}
          >
            about us{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;

/**
 * 
 * element.style {
    background-image: url(https://optimizeseo.co.uk/wp-content/uploads/2020/02/blog_page-title.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: bottom center;
    background-color: #f2f2f4;
    height: 300px;
    margin-bottom: 60px;
    padding-top: 120px;
    padding-bottom: 50px;
}

 */
