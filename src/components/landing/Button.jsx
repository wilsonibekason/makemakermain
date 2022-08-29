import React from "react";
import styles from "../../style";

const Button = ({ styles, navigate }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
      onClick={() => navigate}
    >
      Get Started
    </button>
  );
};

export default Button;
