import React from "react";
import styles from "../../../style";

const ValueCard = () => {
  return (
    <>
      <div class="w-[350px] h-[300px] bg-transparent cursor-pointer group perspective ">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            class="absolute backface-hidden border-2 w-full h-full bg-no-repeat bg-cover rounded-lg shadow "
            style={{
              backgroundImage: `url("https://www.legalcheek.com/wp-content/uploads/2018/11/stem-student.jpeg")`,
            }}
          ></div>
          <div className="absolute flex flex-col rounded-lg p-4 items-center justify-center w-full h-full ">
            <h1
              className={`font-raleway font-bold text-4xl text-white capitalize`}
            >
              Our vision
            </h1>
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-lg ">
            <div class="text-center flex flex-col items-center justify-center h-full blue__bg px-2 py-auto px-auto">
              <p className="font-poppins font-medium text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              {/* <button class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Watch Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueCard;
