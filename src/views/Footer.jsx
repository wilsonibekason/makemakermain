import React from "react";
import styles from "../style";
import { logo } from "../assets/assets";
import { footerLinks, socialMedia } from "../utils/data";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col mb-8 w-full `}>
        {/** first layout */}
        <div className={`flex flex-1 flex-col justify-start mr-10`}>
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            voluptatibus, voluptatem explicabo pariatur dignissimos natus!
          </p>
        </div>
        {/** link layout */}
        <div className="flex flex-row flex-[1.5] w-full justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col sm:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins text-[18px] leading-[20px] text-white font-medium mb-1">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/** footer bottom contents  */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3f3e47] ">
          <p className="font-poppins text-[18px] leading-[20px] text-white font-medium mb-1 text-center">
            2022 WilsonIbekason, All Rights Reserved
          </p>
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                src={social.icon}
                alt="social_links"
                key={social.id + index}
                className={` w-[21px] h-[21px object-contain ${
                  index !== socialMedia.length - 1 ? "mr-6 " : "mr-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
