import React from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../client";
import styles from "../../style";
import { logo, makeLogo } from "../../assets/assets";
import { useStateContext } from "../../state/OnLandingContext";
import { footerLinks, socialMedia, blogFooterLinks } from "../../utils/data";
const Footer = () => {
  const { footerAbout, logoIMG, socialMedia } = useStateContext();
  //const { message } = footerAbout();
  console.log("the footerabout output", footerAbout);
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY2} flex-col mx-0 md:mx-4 `}
    >
      <div className={`flex flex-col mb-8 w-full `}>
        {/** first layout */}

        <div className="w-full flex justify-around flex-col md:flex-row ">
          <div clasName="flex flex-row md:flex-col justify-evenly ">
            <img
              //src={logo}
              src={makeLogo}
              alt="hoobank"
              className="w-[266px] h-[72px] object-contain"
            />
            <p
              className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite max-w-[470px] mt-5 mb-4`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              voluptatibus, voluptatem explicabo pariatur dignissimos natus!
            </p>
          </div>
          <div className="flex md:flex-col flex-row mx-auto md:mx-0 ">
            {blogFooterLinks.map((footerLink, index) => (
              <div
                key={index}
                className="flex flex-col sm:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins text-[18px] leading-[20px] text-white font-medium mb-1">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <NavLink to={`${link?.link}`}>
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer capitalize ${
                          index !== footerLink.links.length ? "mb-4" : "mb-0"
                        }`}
                      >
                        {link.name}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/** footer bottom contents  */}
        <div className="w-full flex justify-around items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3f3e47] ">
          <p className="font-poppins text-[10px] leading-[10px] text-white font-medium mb-1 text-center">
            2022 Make Maker, All Rights Reserved
            <span className="text-gray-300 capitalize font-base ">
              {"  "} designed by wilsonibekason
            </span>
          </p>
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <a href={`${social?.link}`} target="_blank" rel="noreferrer">
                <img
                  src={social.icon}
                  alt="social_links"
                  key={social.id + index}
                  className={` w-[21px] h-[21px object-contain hover:text-blue-400  ${
                    index !== socialMedia.length - 1 ? "mr-6 " : "mr-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
