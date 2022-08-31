import React from "react";
import styles from "../style";

const NoPage = () => {
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`{styles.boxWidth}`}>
          <h1 className={`${styles.heading5}`}>Such page is not found</h1>
          <button className={`${styles.buttonOutline} font-poppins`}>
            {" "}
            return home
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;
