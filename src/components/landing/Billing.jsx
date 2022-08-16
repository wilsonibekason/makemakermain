import React from "react";
import styles from "../../style";
import { layout } from "../../style";
import { apple, bill, google } from "../../assets/assets";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your billing <br className="sm:block hidden" /> and
          invoicing{" "}
        </h2>
        <p className={` max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          eaque qui accusamus fugiat labore eos.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
          <img
            src={apple}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
