import React from "react";
import { Navbar } from "../../landing";
import { Footer } from "../../blogs/components";
const Layout = ({ children }) => {
  return (
    <>
      <div className="blue__bg">
        <Navbar />
      </div>
      {children}
      <div className="mx-4">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
