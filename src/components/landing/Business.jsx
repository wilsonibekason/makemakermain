import React from "react";
import styles, { layout } from "../../style";
import { features } from "../../utils/data";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, id }) => (
  <div
    className={` flex flex-row p-6 rounded-[20px] ${
      id !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="icon_card"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-black text-[10px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading4}>
          You Do The business <br className="sm:block hidden" />
          We Handle the rest
        </h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-5 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo eum,
          omnis consectetur ipsa magni quasi est corrupti rerum mollitia?
        </p>
        <Button styles="mt-10" />
      </div>
      {/** cards  */}
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => {
          const { id, title, icon, content } = feature;
          return (
            <FeatureCard
              key={feature.id + index}
              id={id}
              title={title}
              icon={icon}
              content={content}
            />
          );
        })}
      </div>
      {/** cards  */}
    </section>
  );
};

export default Business;
