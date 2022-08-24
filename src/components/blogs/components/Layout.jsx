import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";

import { Navbar } from "../../landing";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { blogs } = useStateBlogContext();

  return (
    <>
      <div className="white__bg mx-0 lg:mx-[4rem]">
        {/* {blogs
          .sort((a, b) => a - b)
          .map((blog) => (
            <Header {...blog} />
          ))} */}
        <Header {...blogs[0]} />
        <div className="my-8">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
