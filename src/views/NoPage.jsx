import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`{styles.boxWidth}`}>
          <h1 className={`${styles.heading5}`}>Such page is not found</h1>
          <button
            className={`${styles.buttonOutline} font-poppins`}
            onClick={() => navigate("/", { replace: true })}
          >
            {" "}
            return home
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;
