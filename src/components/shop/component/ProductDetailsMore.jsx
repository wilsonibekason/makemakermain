import React, { useReducer, useState } from "react";
import PortableText from "react-portable-text";
import { BLOG_ACTION_TYPE } from "../../../state/actions/BlogActionTypes";
import { INITIAL_STATE, BlogReducer } from "../../../state/reducer/BlogReducer";

import styles from "../../../style";

const ProductDetailsMore = ({ title, defaultProductVariant, body }) => {
  // useReducer()
  const [openTab, setOpenTab] = useState(1);
  const [state, dispatch] = useReducer(BlogReducer, INITIAL_STATE);
  const { FORM_CHANGE } = BLOG_ACTION_TYPE;
  console.log("body:", body);
  const handleChange = (e) => {
    dispatch({
      type: FORM_CHANGE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  return (
    <>
      <div className="flex flex-wrap ">
        <div className=" mx-auto w-full  mt-16">
          <ul
            className="flex mb-0 list-none  pt-3 pb-4 flex-row "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center w-40">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                description
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center w-36 lg:w-40 md:w-40">
              <a
                className={
                  " text-xs  font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                additional information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center w-40">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                reviews{" "}
                <span className="text-teal-600 font-semibold"> (0)</span>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <PortableText
                    dataset="production"
                    projectId="zyte9ttg"
                    content={[
                      {
                        text: "wilson ibekason",
                      },
                    ]}
                    serializers={{
                      h1: (props) => (
                        <h1 className={`${styles.heading2}`} {...props}></h1>
                      ),
                    }}
                    className="align-middle"
                  />
                  {/* TODO: REMOVE THIS COMMENTED CODE */}
                  {/* <PortableText
                    dataset={"production"}
                    projectId={"zyte9ttg"}
                    content={body}
                    serializers={{
                      h1: (props) => (
                        <h1
                          className="text-2xl font-bold my-5 text-white"
                          {...props}
                        />
                      ),
                      h2: (props) => (
                        <h2
                          className="text-xl font-bold my-5 text-white"
                          {...props}
                        />
                      ),
                      p: (props) => (
                        <p
                          className="text-sm font-semibold text-white"
                          {...props}
                        ></p>
                      ),
                      li: ({ children }) => (
                        <li className="ml-4 list-none text-gray-100">
                          {children}
                        </li>
                      ),
                      link: ({ href, children }) => (
                        <a
                          href={href}
                          className="inline-block py-2 text-base leading-7 text-white hover:text-gray-800 dark:text-gray-300 dark:hover hover:underline "
                        >
                          {children}
                        </a>
                      ),
                    }}
                  /> */}
                  This is a description section
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className="text-blueGray-500 text-sm font-semibold font-sans">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  {/** Title */}
                  <div className="mb-4">
                    <p className="text-blueGray-400 text-lg font-semibold uppercase">
                      send us a review it's worth it
                    </p>
                  </div>

                  {/** username */}
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      value={state.name}
                      name="name"
                      onChange={handleChange}
                    />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  {/** useremail */}
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      name="email"
                      value={state.email}
                      required
                      onChange={handleChange}
                    />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  {/** userreview */}
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <textarea
                      rows={3}
                      cols={6}
                      type="text"
                      placeholder="type in your review ..."
                      className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      name="review"
                      value={state.review}
                      onChange={handleChange}
                    />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  {/**button */}
                  {/* {!isReviewCreated ? ( */}
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <button
                      className=" border border-blue-500 text-blueGray-600 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      //   onClick={handleReviewSubmit}
                    >
                      {/* {`${!reviewLoaded ? "submit review" : "sending"} `} */}
                      submit review
                    </button>
                  </div>
                  {/* ) : ( */}
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <p className="text-md text-blueGray-600 font-bold">
                      Thanks for your review
                    </p>
                  </div>
                  {/* )} */}

                  {/**button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsMore;
