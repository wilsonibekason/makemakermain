import React from "react";
import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { close, logo, menu } from "../../../assets/assets";
import { navLinks } from "../../../utils/data";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 absolute w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <Button message="open cart" />

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
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
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
