import React from "react";
import { Navbar } from "../../landing";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="white__bg mx-0 lg:mx-[4rem]">
        <Header />
        <div className="my-8">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
