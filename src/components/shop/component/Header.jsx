import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { urlFor } from "../../../client";
import { useStateContext } from "../../../state/OnLandingContext";
import { useStateShopContext } from "../../../state/OnShopContext";
import { navLinks, shopCategories } from "../../../utils/data";
import Carts from "./Carts";

const Navbar = () => {
  const { logoIMG } = useStateContext();
  const { totalQuantities } = useStateShopContext();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleOpen = () => setToggle(true);
  toggle && <Carts />;
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 dark:bg-gray-900 absolute w-full h-20 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            {logoIMG ? (
              <img
                src={urlFor(logoIMG)}
                className="w-32"
                alt="makemake logo"
                // onClick={() => navigate("/", { replace: true })}
              />
            ) : (
              <img
                src="https://MakeMaker.com/docs/images/logo.svg"
                className="mr-3 h-6 w-6 sm:h-9"
                alt="MakeMaker Logo"
              />
            )}
          </NavLink>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={() => navigate("/product/cart", { replace: true })}
              className={`border border-blue-400 text-gray-300  active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
            >
              open cart
            </button>
            <div
              className=" rounded-full  text-gray-200 cursor-pointer font-poppins text-[14px]  
         flex items-center  justify-center  px-2 mx-2 text-lg"
            >
              {totalQuantities}
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 uppercase ">
              {shopCategories.map((navLink, index) => (
                <li key={index + navLink.id} className={"font-poppins"}>
                  <a
                    href={`#${navLink.id}`}
                    className={`font-normal cursor-pointer font-poppins text-[16px]   ${
                      index === navLinks.length - 1 ? "mr-0" : "mr-10"
                    } text-indigo-500 hover:text-gray-500 hover:border-b-2 hover:border-solid hover:border-gray-500`}
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav classNameName="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <div className="items-center ">
        <BiCartAlt size={25} />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li key={index + navLink.id} className={"font-poppins"}>
            <a
              href={`#${navLink.id}`}
              className={`font-normal cursor-pointer font-poppins text-[16px]   ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-indigo-500`}
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul> */}
      {/** small device navbar preference */}
      {/* <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="nav_logo"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px ] rounded-xl sidebar`}
        >
          <ul className="list-none  flex flex-col  justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={index + navLink.id}
                className={`font-medium cursor-pointer font-poppins text-[16px]   ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav> */}
    </>
  );
};

export default Navbar;
