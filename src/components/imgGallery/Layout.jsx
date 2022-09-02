import React from "react";
// import { Navbar } from "../../landing";
import styles from "../../style";
import { Navbar, Footer } from "../landing";
// import { Footer } from "../../blogs/components";
const Layout = ({ children }) => {
  return (
    <>
      {/* <div className="blue__bg">
        <Navbar />
      </div> */}
      <div className={`${styles.paddingX} ${styles.flexCenter} blue__bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {children}
      <div className={` white__bg ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="blue__bg rounded-t-xl px-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
