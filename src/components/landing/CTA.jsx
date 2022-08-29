import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style";
// import Button from "./Button";

const CTA = () => {
  const navigate = useNavigate();
  return (
    // bg-black-gradient-2
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col border border-solid border-gray-600 bg-dimWhite rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col ">
        <h2 className={styles.heading5}>Lets try our service now</h2>
        <p className={`${styles.paragraph1} max-w-[470px] mt-5 `}>
          Experience speaks the most, so lets begin
        </p>
      </div>
      {/** second wrapper */}

      {/** second wrapper */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        {/* <Button /> */}
        <button
          type="button"
          className={`py-4 px-6 bg-blue-gradient font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
          onClick={() => navigate("/product", { replace: true })}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
