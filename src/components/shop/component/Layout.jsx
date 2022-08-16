import React from "react";
import { Header } from ".";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="white__bg ">
        <div className="mx-[4rem]">
          <Header />
        </div>
        {/* <div className="border-t bg-black" /> */}
        <div className="mt-16">{children}</div>
        {/* <div className="mx-[2rem]"> */}
        <Footer />
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
