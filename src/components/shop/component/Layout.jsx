import React from "react";
import { Header } from ".";
import { Footer } from "../../../components/landing";
import styles from "../../../style";
// import Footer from "./Footer";
import HomeSwiper from "./HomeSwiper";

const Layout = ({ children }) => {
  return (
    <>
      <div className="white__bg ">
        <div className="mx-[4rem]">
          <Header />
        </div>
        {/* <HomeSwiper /> */}
        {/* <div className="border-t bg-black" /> */}
        <div>{children}</div>
        {/* <div className="mx-[2rem]"> */}
        <div className={` white__bg ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="blue__bg rounded-t-xl">
              <Footer />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
