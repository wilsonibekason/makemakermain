import React from "react";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import styles from "../../../style";
import { Footer } from "../../../components/landing";
import { Navbar } from "../../landing";
// import Footer from "./Footer";
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
        <div className={` white__bg ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="blue__bg rounded-t-xl">
              <Footer />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Layout;
