import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { urlFor } from "../../../client";
import styles from "../../../style";

const FeaturedPostCard = ({ publishedAt, title, mainImage, author, slug }) => {
  const date = moment(publishedAt).utc().format("YYYY-MMM-DD");
  return (
    <>
      <Link to={`/blog/${slug?.current}`}>
        <div className="relative h-72 hover:scale-105  ease-linear transition duration-150">
          <div className="">
            <div
              className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 "
              style={{
                // backgroundImage: `url('https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg')`,
                backgroundImage: `url('${urlFor(mainImage)}')`,
              }}
            />
          </div>

          <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
          <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full ">
            <p className={`${styles.span4}`}>{date}</p>
            <p className="text-white mb-4 font-medium font-poppins text-lg text-center ">
              {title}
            </p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
              <img
                // src="https://leadership.ng/wp-content/uploads/2022/06/STEM-education.jpeg"
                src={urlFor(author?.image)}
                alt="author_image"
                className="w-[30px] h-[30px] align-middle drop-shadow-lg rounded-full "
              />
              <p className="inline align-middle text-white shadow-sm ml-2   font-medium  text-sm lg:text-lg font-raleway">
                {" "}
                {author?.name}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FeaturedPostCard;
