import styles from "../../../style";
import { AiOutlineMail } from "react-icons/ai";
const ContactCard = () => {
  return (
    <>
      <div className="min-h-[100vh] my-12">
        <div className={`${styles.flexCenter} ${styles.paddingY} `}>
          <div className="w-full flex-col md:flex-row justify-between items-center">
            <div className="text-center">
              <h1 className={`${styles.heading5}`}>contact us</h1>
            </div>
            <div className="text-center">
              <p className={`${styles.paragraph1} capitalize`}>
                lets keep in touch
              </p>
            </div>
          </div>
          {/** contact form  */}
        </div>
        <div className="grid min-h-screen bg-purple-50 place-items-center ">
          <div className="mx-auto h-[600px] w-[450px] bg-white rounded-md border-[14px] ring ring-blue-200 relative shadow-xl ">
            {/* <img
              src="https://www.legalcheek.com/wp-content/uploads/2018/11/stem-student.jpeg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20 backdrop-blur-lg"
            /> */}
            <div
              className={"grid grid-cols-1 md:grid-cols-12 gap-4 mt-16 mx-4"}
            >
              <div className="grid col-span-1 md:col-span-6">
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                    //  value={state.name}
                    name="name"
                    // onChange={handleChange}
                  />
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="grid col-span-1 md:col-span-6">
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-2 py-4 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full  pr-10"
                    name="email"
                    // value={state.email}
                    required
                    //onChange={handleChange}
                  />
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="grid col-span-12 h-1/2 ">
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <textarea
                    rows={3}
                    cols={6}
                    type="text"
                    placeholder="type in your review ..."
                    className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10 placeholder:capitalize"
                    name="review"
                    // value={state.review}
                    // onChange={handleChange}
                  />
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
              </div>
              <div className="grid col-span-12 mx-auto">
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className={` py-4 px-6 bg-blue-200 font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] active:bg-blue-400 shadow hover:shadow-lg focus:outline-none ease-linear transition-all duration-150 capitalize`}
                    // bg-blue-gradient
                  >
                    submit message
                  </button>
                </div>
              </div>
              {/* <div className="grid col-span-12 mx-auto mt-4">
                <h1 className="font-poppins font-semibold text-lg capitalize text-gray-600">
                  contact information
                </h1>{" "}
              </div> */}
            </div>
            {/*** contact information */}
            <div className={`${styles.flexStart} ${styles.paddingY} `}>
              <div className="flex flex-col justify-center items-start">
                {" "}
                <h1 className="font-poppins font-semibold text-lg capitalize text-gray-600 ">
                  contact information
                </h1>{" "}
                <div className="flex justify-between items-center gap-4 my-4">
                  <AiOutlineMail />
                  <p
                    className={`font-poppins text-sm font-medium text-gray-300 `}
                  >
                    wilsonibekason@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
