import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsBullseye, BsEyedropper, BsEyeglasses } from "react-icons/bs";
// components

// import { Navbar } from "../components/landing";
import { Navbar } from "../components/about/component";
import { Footer } from "../components/blogs/components";

import { useStateContextAbout } from "../state/OnAboutContext";
import { urlFor } from "../client";
import style from "../style";
export default function AboutUs() {
  const {
    aboutHeader,
    sectionItem1,
    sectionItem2,
    sectionItem3,
    // sectionItem4,
    aboutSection,
    aboutTip,
    aboutTeamCard,
    aboutTeamTitle,
    aboutTeamDesc,
    email,
    handleSubmit,
    handleChange,
    fullName,
    error,
    message,
    isFormSubmitted,
    loading,
    contactHeader,
    contactCard,
  } = useStateContextAbout();
  //TODO:
  /// populate date to abutHeader sectionContent aboutSection aboutTip aboutTeAM cARD ABOUTtEAM contactCard contactHeader
  const timer = setTimeout(() => {
    error && (
      <h1 className="font-railway font-semibold text-2xl text-center w-[50%] ">
        Invalid input
      </h1>
    );
  }, 3000);
  clearTimeout(timer);
  return (
    <>
      <div className="blue__bg">
        <Navbar />
      </div>
      <main>
        {aboutHeader?.map((item, index) => {
          const { image, description, title } = item;
          return (
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center  min-h-[calc(70vh-10vh)] ">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  // backgroundImage:
                  //   "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                  backgroundImage: `url(${urlFor(item?.image)})`,
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              {/* <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <motion.div
                      className="pr-12 mt-16 lg:mt-40"
                      initial={{
                        y: -80,
                        x: 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        y: -40,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      <motion.h1
                        className="text-white font-bold text-5xl font-raleway capitalize"
                        animate={{
                          fontSize: "35px",
                          color: "white",
                        }}
                      >
                        {title}
                      </motion.h1>
                      <p className="mt-4 text-lg lg:text-2xl font-raleway font-medium text-gray-200">
                        {description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div> */}
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
            /** component 1 */
          );
        })}

        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-wrap"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 3,
                duration: 2,
                type: "spring",
                stiffness: 500,
              }}
            >
              {/** vvv */}

              <motion.div
                className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full white__bg">
                      {/* <i className={`fas ${sectionItem1?.icons}`}></i> */}
                      <BsBullseye className="text-blue-400" />
                    </div>
                    <h6 className="text-xl font-bold font-raleway ">
                      {sectionItem1?.title}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500 font-raleway font-semibold">
                      {sectionItem1?.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-4/12 px-4 text-center"
                whileHover={{
                  scale: 1.1,
                }}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      {/* <i className={`fas ${sectionItem2?.icons}`}></i> */}
                      <BsEyedropper />
                    </div>
                    <h6 className="text-xl font-bold font-raleway">
                      {sectionItem2?.title}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500 font-raleway font-semibold">
                      {sectionItem2?.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pt-6 w-full md:w-4/12 px-4 text-center"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      {/* <i className={`fas ${sectionItem3?.icons}`}></i> */}
                      <BsEyeglasses />
                    </div>
                    <h6 className="text-xl font-bold font-raleway">
                      {sectionItem3?.title}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500 font-raleway font-semibold">
                      {sectionItem3?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            {aboutSection?.map((item, index) => {
              const {
                articleTitle,
                articleDesc,
                companyName,
                cardTitle,
                cardDesc,
                cardImgUrl,
              } = item;
              return (
                <div className="flex flex-wrap items-center mt-32">
                  <motion.div
                    className="w-full md:w-5/12 px-4 mr-auto ml-auto"
                    initial={{
                      x: 100,
                    }}
                    animate={{
                      x: 0,
                    }}
                    transition={{
                      delay: 3,
                      duration: 2,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      {articleTitle}
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                      {articleDesc}
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600">
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go. Just make sure you enable them first
                      via JavaScript.
                    </p>
                    <Link to="/" className="font-bold text-gray-700 mt-8">
                      {companyName}
                    </Link>
                  </motion.div>

                  <motion.div
                    className="w-full md:w-4/12 px-4 mr-auto ml-auto"
                    whileHover={{
                      scale: 1.1,
                    }}
                    initial={{
                      x: -100,
                    }}
                    animate={{
                      x: 0,
                    }}
                    transition={{
                      delay: 3,
                      duration: 2,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                      <img
                        alt="..."
                        //src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        src={urlFor(cardImgUrl)}
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        {/* <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-blue-500 fill-current"
                          ></polygon>
                        </svg> */}
                        <h4 className="text-xl font-bold text-white">
                          {cardTitle}
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          {cardDesc}
                        </p>
                      </blockquote>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
        {/* component two */}
        {/** initialsing sanity schema for client */}
        {aboutTip?.map((item, index) => {
          const { headName, headDesc, headImageUrl } = item;
          return (
            <section className="relative py-20">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      // src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      src={urlFor(headImageUrl)}
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                      <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                        <i className="fas fa-rocket text-xl"></i>
                      </div>
                      <h3 className="text-3xl font-semibold">{headName}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-500">
                        {headDesc}
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                                <i className="fas fa-fingerprint"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-500">
                                Carefully crafted components
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                                <i className="fab fa-html5"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-500">
                                Amazing page examples
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                                <i className="far fa-paper-plane"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-500">
                                Dynamic components
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            // component three
          );
        })}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{aboutTeamTitle}</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-500">
                  {aboutTeamDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {aboutTeamCard?.map((item, index) => {
                const {
                  cardTitle,
                  cardDesc,
                  cardImage,
                  Twitter,
                  LinkedIn,
                  facebook,
                } = item;
                return (
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        //src={require("assets/img/team-1-800x800.jpg").default}
                        src={urlFor(cardImage)}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">{cardTitle}</h5>
                        <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                          {cardDesc}
                        </p>
                        <div className="mt-6 ml-4">
                          <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-2 pl-2"
                            type="button"
                          >
                            {/* <i className="fab fa-twitter"></i> */}
                            <FaFacebookF />
                          </button>
                          <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 pl-2"
                            type="button"
                          >
                            {/* <i className="fab fa-facebook-f"></i> */}
                            <FaTwitter />
                          </button>
                          <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 pl-2 "
                            type="button"
                          >
                            {/* <i className="fab fa-dribbble"></i> */}
                            <FaLinkedin />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* component four */}
        <section className="pb-20 relative block bg-gray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          {contactCard?.map((item, index) => {
            const { cardName, cardDesc, cardIcon, cardTitle, cardDescription } =
              item;
            return (
              <>
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                  <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                      <h2 className="text-4xl font-semibold text-white">
                        {cardTitle}
                      </h2>
                      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                        {cardDescription}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className={`fas ${cardIcon} text-xl`}></i>
                      </div>
                      <h6 className="text-xl mt-5 font-semibold text-white">
                        {cardName}
                      </h6>
                      <p className="mt-2 mb-4 text-gray-400">{cardDesc}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
        {/* component five */}
        {contactHeader?.map((item, index) => {
          const { name, description } = item;
          return (
            <section className="relative block py-24 lg:pt-0 bg-gray-800">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">{name}</h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                          {description}
                        </p>
                        <>
                          {!isFormSubmitted ? (
                            <>
                              <div className="relative w-full mb-3 mt-8">
                                <label
                                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                  htmlFor="full-name"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Enter yout full Name"
                                  required
                                  name="name"
                                  value={fullName}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="relative w-full mb-3">
                                <label
                                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                  htmlFor="Enter your email address"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Email"
                                  name="email"
                                  value={email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="relative w-full mb-3">
                                <label
                                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                  htmlFor="message"
                                >
                                  Message
                                </label>
                                <textarea
                                  rows="4"
                                  cols="80"
                                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                  placeholder="Type in your  message..."
                                  onChange={handleChange}
                                  required
                                  name="message"
                                  value={message}
                                />
                              </div>
                              <div className="text-center mt-6">
                                <button
                                  className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={handleSubmit}
                                >
                                  {!loading ? "Send Message" : "Sending"}
                                </button>
                              </div>
                            </>
                          ) : (
                            <div>
                              <h4 className="text-gray ">
                                Thanking you for getting in touch
                              </h4>
                            </div>
                          )}
                        </>
                        {error && timer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            //component six
          );
        })}
      </main>
      <div className="mx-4">
        <Footer />
      </div>
    </>
  );
}
