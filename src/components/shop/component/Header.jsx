import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";
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

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 blue__bg absolute w-full h-20 z-20 top-0 left-0 border-b border-gray-200 ">
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
            <div
              className="relative bg-blue-400 rounded-full border-2 w-10 h-10 flex justify-center items-center mr-4 mb-2"
              onClick={() => navigate("/product/cart", { replace: true })}
            >
              <TbShoppingCartPlus
                className="flex justify-center items-center text-white"
                size={30}
              />
              <div className="absolute  w-0.5 h-0.5 p-4 bg-white flex justify-center items-center -top-4 left-4 rounded-full ">
                <span className={" font-bold text-gray-600 "}>
                  {totalQuantities}
                </span>
              </div>
            </div>
            <div
              className="relative md:hidden bg-blue-400 rounded-full border-2 w-10 h-10 flex justify-center items-center mr-4 mb-2 transition duration-200 ease-linear"
              //onClick={() => navigate("/product/cart", { replace: true })}
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? (
                <AiOutlineCloseCircle
                  className="flex justify-center items-center text-white "
                  size={30}
                />
              ) : (
                <AiOutlineMenuFold
                  className="flex justify-center items-center text-white"
                  size={30}
                />
              )}
            </div>
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
                    } text-white hover:text-green-300 hover:border-b-2 hover:border-solid hover:border-green-500 capitalize `}
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* <div
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
                      <NavLink to={`${navLink.id}`}>{navLink.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div> */}
          </div>
          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-blue-gradient overflow-visible absolute top-[70px] right-0  my-2 min-w-full rounded-b-xl sidebar`}
            >
              <ul className="list-none  flex flex-col  justify-end items-center flex-1">
                {shopCategories.map((navLink, index) => (
                  <li
                    key={index + navLink.id}
                    className={`font-medium cursor-pointer font-poppins text-[16px]   ${
                      index === shopCategories.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                  >
                    <NavLink to={`${navLink.id}`}>{navLink.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
