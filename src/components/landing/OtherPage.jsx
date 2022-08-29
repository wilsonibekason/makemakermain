import React from "react";
import styles, { layout } from "../../style";
import { feedback, morePages } from "../../utils/data";
import FeedBackCard from "./FeedBackCard";
import MorePage from "./MorePage";

const OtherPage = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] -right-[50%] red__gradient" />
      <div
        className={`w-full items-center justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h1 className={styles.heading5}>
          Navigate to
          <br className="sm:block hidden" />
          other pages
        </h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph2} max-w-[470px] mt-5 `}>
            Navigate to our other pages to see what more we provide
          </p>
        </div>
      </div>
      {/** contents container */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {morePages.map((item, index) => (
          <MorePage key={index} {...item} />
        ))}
      </div>
      {/** contents container */}
    </section>
  );
};

export default OtherPage;
