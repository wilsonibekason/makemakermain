import React from "react";
import TeamCard from "./TeamCard";

import styles from "../../../style";

const AboutTeam = () => {
  return (
    <>
      <div className="min-h-[100vh] my-16">
        <div className="items-center justify-center mb-8">
          <h1 className={`${styles.heading5} text-center`}>Meet the Team</h1>
        </div>
        <div className="relative flex flex-wrap basis-full flex-col lg:flex-row mx-4 lg:mx-16 gap-40">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
