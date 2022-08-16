import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../../assets/assets";
import { navLinks } from "../../utils/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li key={index + navLink.id} className={"font-poppins"}>
            <a
              href={`#${navLink.id}`}
              className={`font-normal cursor-pointer font-poppins text-[16px]   ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
      {/** small device navbar preference */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
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
    </nav>
  );
};

export default Navbar;
