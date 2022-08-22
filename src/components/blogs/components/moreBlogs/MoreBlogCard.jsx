import React from "react";
import moment from "moment";
import { urlFor } from "../../../../client";
import styles from "../../../../style";

const MoreBlogCard = ({ publishedAt, title, mainImage, author }) => {
  const date = moment(publishedAt).utc().format("YYYY-MMM-DD");
  return (
    <>
      <div className="relative h-72">
        <div
          className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
          style={{
            // backgroundImage: `url('https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg')`,
            backgroundImage: `url('${urlFor(mainImage)}')`,
          }}
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full ">
          <p className={`${styles.paragraph}`}>{date}</p>
          <p className="text-white mb-4 font-semibold text-2xl text-center ">
            {title}
          </p>
          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <img
              // src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
              src={urlFor(author?.image)}
              alt="author_image"
              className="w-[30px] h-[30px] align-middle drop-shadow-lg rounded-full "
            />
            <p className="inline align-middle text-white shadow-sm ml-2 font-medium">
              {" "}
              {author?.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreBlogCard;
