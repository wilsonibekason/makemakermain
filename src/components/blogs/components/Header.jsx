import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import { useStateBlogContext } from "../../../state/OnBlogContext";
import { close, makelogo, menu } from "../../../assets/assets";
import { categories } from "../../../utils/data";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ specificCategory }) => {
  // const { handleCategoryFetch } = useStateBlogContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-0 lg:px-12 py-3  mb-3 border-b-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <a
           className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
           href="#pablo"
         >
           cinema
         </a> */}
            <NavLink to={"/blog"}>
              <img
                src="https://i0.wp.com/cine21.ng/wp-content/uploads/2021/01/cropped-White-Horizontal-Logo-1.png?resize=1536%2C705&ssl=1"
                //src={makelogo}
                alt=""
                className="w-32  object-contain"
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              {categories?.map((item, index) => {
                const { image, name } = item;
                return (
                  <li className="nav-item" key={index}>
                    <NavLink
                      className="px-3 py-2 flex items-center text-xs uppercase font-normal font-raleway leading-snug text-black hover:text-yellow-300 hover:border-b-4 hover:border-yellow-300 "
                      to={`/blog/category/${name}`}
                    >
                      {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i> */}
                      <span className="ml-2 text-xs lg:text-lg capitalize tracking-wide  font-black">
                        {name}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
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
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold font-robotoMain leading-snug text-white hover:opacity-75"
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
