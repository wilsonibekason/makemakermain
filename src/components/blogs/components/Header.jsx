import React from "react";
import { useState, Fragment } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { close, makelogo, menu } from "../../../assets/assets";
import { categories, aboutLinks } from "../../../utils/data";
// import NavLinks from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({ specificCategory, children }) => {
  // return React.Children.map(children, (child) => {
  //   const clone = React.cloneElement(child, {
  //     hello: "world",
  //   });
  //   return clone;
  // });
  const {
    btnDropDownRef,
    popoverDropDownRef,
    dropDownPopover,
    openDropDownPopover,
    closeDropDownPopover,
  } = useStateBlogContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-0 lg:px-12 py-1  mb-3 border-b-4">
        <div className="container px-4  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to={"/"}>
              <img
                src="https://i0.wp.com/cine21.ng/wp-content/uploads/2021/01/cropped-White-Horizontal-Logo-1.png?resize=1536%2C705&ssl=1"
                // src={makelogo}
                alt=""
                className="w-[124px]"
              />
            </NavLink>
            <button
              className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <GiHamburgerMenu size={30} />
            </button>
          </div>
          <div className="hidden lg:flex">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-[12px]  border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 font-poppins capitalize">
                  categories
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {categories.map((category, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href="#ff"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm capitalize"
                            )}
                          >
                            {category.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              {aboutLinks?.map((item, index) => {
                const { link, id, title } = item;
                return (
                  <li
                    className="nav-item px-3 py-2 flex items-center text-[16px] uppercase font-normal font-raleway leading-snug text-black hover:text-gray-300"
                    key={index + parseInt(id)}
                    ref={btnDropDownRef}
                    onClick={() => navigate(`${link}`, { replace: true })}
                  >
                    <span className="ml-2 text-[16px] lg:text-sm capitalize tracking-wide  font-black">
                      {title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* dropdown component */}
          {/* <div
            className={` ${
              dropDownPopover ? "flex" : "hidden"
            }  flex-1 justify-end items-center overflow-visible`}
            ref={popoverDropDownRef}
          >
            <div className="p-6 bg-blue-gradient absolute -top-0.5 -right-12 mb-40 ml-40 min-w-[140px ] rounded-xl sidebar overflow-visible">
              <ul className="list-none  flex flex-col  justify-end items-center flex-1">
                {categories?.map((item, index) => {
                  const { image, name } = item;
                  return (
                    <li className="nav-item" key={index}>
                      <NavLink
                        className="px-3 py-2 flex items-center text-[16px] uppercase font-normal font-raleway leading-snug text-black hover:text-gray-300"
                        to={`/blog/category/${name}`}
                      >
                        <span className="ml-2 text-[16px] lg:text-sm capitalize tracking-wide  font-black">
                          {name}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
          {/* end of dropdown component */}
        </div>
      </nav>
      <div
        className={
          " bg-gray-100 text-black text-start py-1 lg:hidden " +
          (navbarOpen
            ? " flex  transition-all ease-out duration-500 "
            : " hidden")
        }
        id="example-navbar-danger "
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
          {categories?.map((item, index) => {
            const { image, name } = item;
            return (
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-[16px] uppercase font-bold font-robotoMain leading-snug text-white hover:opacity-75"
                  to={`/blog/category/${name}`}
                >
                  {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i> */}
                  <span className="ml-2 text-[18px] lg:text-2xl capitalize tracking-wide font-robotoMain text-black font-black leading-4">
                    {name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
