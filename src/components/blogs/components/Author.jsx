import React from "react";
import PortableText from "react-portable-text";
import { urlFor } from "../../../client";
import styles from "../../../style";

const Author = ({ author }) => {
  const { image, name, bio } = author;
  console.log(bio);
  return (
    <>
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg blue__bg bg-opacity-20">
        <div className="absolute left-0 right-0  -top-14">
          <img
            //src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
            src={urlFor(image)}
            alt="author_image"
            className="w-[100px] h-[100px]  align-middle rounded-full"
          />
        </div>
        {/** for author description and name  */}
        <p className={`${styles.span3}`}>{name}</p>
        <span className={`${styles.span3} line-clamp-3`}>
          <PortableText
            dataset={"production"}
            projectId={"zyte9ttg"}
            content={bio}
            serializers={{
              h1: (props) => (
                <h1 className="text-xl text-gray-300 " {...props}>
                  {" "}
                </h1>
              ),
              span: (props) => (
                <span className={styles.span2} {...props}></span>
              ),
              li: ({ children }) => (
                <li className="ml-4 list-none text-xs text-black ">
                  {children}
                </li>
              ),
              link: ({ href, children }) => <a href={href}>{children}</a>,
            }}
          />
        </span>
      </div>
    </>
  );
};

export default Author;
