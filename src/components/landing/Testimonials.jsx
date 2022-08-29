import React from "react";
import styles, { layout } from "../../style";
import FeedBackCard from "./FeedBackCard";
import { feedback } from "../../utils/data";
const Testimonials = () => {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] -right-[50%] blue__gradient" />
      <div
        className={`w-full items-center justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h1 className={styles.heading5}>
          What people are saying <br className="sm:block hidden" />
          on our Product
        </h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph2} max-w-[470px] mt-5 `}>
            What our customers are saying towards our products and services
          </p>
        </div>
      </div>
      {/** contents container */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item) => (
          <FeedBackCard key={item.id} {...item} />
        ))}
      </div>
      {/** contents container */}
    </section>
  );
};

export default Testimonials;
