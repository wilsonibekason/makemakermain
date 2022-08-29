import React from "react";
import styles, { layout } from "../../../style";
import ValueCard from "./ValueCard";
const AboutContact = () => {
  return (
    <>
      <div className="min-h-[120vh] max-w-auto">
        <div className={`flex flex-col md:flex-row `}>
          <div className={`${layout.sectionInfo}`}>
            <p
              className={`font-poppins font-semibold text-sm blue__txt uppercase `}
            >
              about makemaker_
            </p>
            <h1 className={`${styles.heading5}`}>
              A full service digital STEM agency
            </h1>
            <p className={`${styles.paragraph1}`}>
              Our team of specialists consistently delivers outstanding results
              combining creative ideas with our vast experience. We can help you
              build a sustainable, meaningful relationship with your clients by
              engaging them with your brand using social media. We work in areas
              as diverse as website design, search engine optimization, social
              media marketing, email marketing and digital marketing.
            </p>
          </div>
          <div className={`${layout.sectionImg}`}>
            <img
              className="w-full h-full relative z-[20] rounded-lg"
              // src="https://jambekcom.com/wp-content/uploads/2022/05/Customer-with-smiling-JP200-in-office_Jambekcom-1.jpg "
              src="https://www.legalcheek.com/wp-content/uploads/2018/11/stem-student.jpeg"
              alt=""
            />
          </div>
        </div>
        {/** core values  */}
        {/* <section class="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white"> */}
        <div className="flex flex-wrap gap-4 mx-4 lg:mx-16 flex-col lg:flex-row basis-full mt-28">
          {/* <div className="flex-auto w-full lg:h-[25%]"> */}
          <ValueCard />
          <ValueCard />
          <ValueCard />
        </div>
      </div>
      {/* </section> */}
      {/* </div> */}
    </>
  );
};

export default AboutContact;
