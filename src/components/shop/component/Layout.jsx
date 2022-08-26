import React from "react";
import { Header } from ".";
import Footer from "./Footer";
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
        <Footer />
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
