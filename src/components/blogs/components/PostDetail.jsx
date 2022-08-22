import React from "react";
import moment from "moment";
import styles from "../../../style";
import { urlFor } from "../../../client";

const PostDetail = ({
  title,
  description,
  mainImage,
  slug,
  _id,
  body,
  category,
  tags,
  author,
  publishedAt,
}) => {
  const date = moment(publishedAt).utc().format("YYYY-MMM-DD");
  console.log(mainImage);
  console.log(author);
  // add logic to render the data when a blog is clicked
  const getContentFragment = (index, text, obj, type) => {
    // define the modified text
    let modifiedText = text;

    if (obj) {
      if (obj.text) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <um key={index}>{text}</um>;
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj?.title}
            src={obj.src}
            width={obj.width}
            height={obj.height}
          />
        );
      default:
        return "";
    }
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="mb-4">
          <div>
            <h1 className={`${styles.BlogHeading1} text-center`}>{title}</h1>
          </div>
          <div className="flex-1 flex flex-row justify-evenly">
            <p className={`${styles.span1}`}>2 days ago</p>
            <h1 className={`${styles.span1}`}>9 minutes read</h1>
            <span className={`${styles.span2}`}>{category}</span>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            //src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
            src={urlFor(mainImage).url()}
            alt="post_card"
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        {/** author */}
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            {/** for author name and authors image */}
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <img
               // src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
               src={urlFor(author?.image)}
                alt=""
                className=" w-[30px] h-[30px] align-middle rounded-3xl "
              />
              <p className={`align-middle ${styles.span2} px-2`}>
                {author?.name}
              </p>
            </div>
            {/** for date post was added */}
            <div className="font-medium text-gray-700 hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h1 className={`${styles.span1} align-middle`}>{date}</h1>
            </div>
          </div>
          {/**render the main post here*/}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
