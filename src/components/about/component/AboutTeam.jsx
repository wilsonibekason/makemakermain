import React from "react";
import TeamCard from "./TeamCard";

import styles from "../../../style";
import { useStateContextAbout } from "../../../state/OnAboutContext";

const AboutTeam = () => {
  const { aboutTeamCard } = useStateContextAbout();
  return (
    <>
      <div className="min-h-[100vh] my-16">
        <div className="items-center justify-center mb-8">
          <h1 className={`${styles.heading5} text-center`}>Meet the Team</h1>
        </div>
        {/* <div className="flex flex-wrap gap-4 mx-4 lg:mx-16 flex-col lg:flex-row basis-full mt-28"> */}
        <div className=" flex flex-wrap basis-full flex-col lg:flex-row mx-4 lg:mx-16 gap-4">
          {aboutTeamCard?.map((item, index) => (
            <TeamCard {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
