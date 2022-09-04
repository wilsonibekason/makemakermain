import React from "react";
import { useStateContext } from "../../state/OnLandingContext";
import { urlFor } from "../../client";
import { makeLogo, makelogo } from "../../assets/assets";
import CountUp from "react-countup";
const Sentence = ({ stats, query }) => {
  const { logoIMG } = useStateContext();

  let statsLength = stats?.length;
  //TODO:
  // remove log
  console.log("_________________________--------------");
  console.log(logoIMG);
  console.log(urlFor(logoIMG));
  console.log("_________________________---------------------");
  return (
    <>
      <div className="flex flex-row gap-4 py-8 justify-center items-center  ">
        <div className="z-10">
          <img src={makeLogo} alt="logo_image" className=" w-24 text-center" />
        </div>

        <p className="font-poppins text-sm capitalize ">
          Showing results of our images{" "}
        </p>
        <strong className="">
          <CountUp end={statsLength} />
        </strong>
      </div>
    </>
  );
};

export default Sentence;
