import React from "react";
import {
  Layout,
  AboutHeader,
  AboutContent,
  AboutTip,
  AboutTeam,
  ContactCard,
  ContactHeader,
} from "./component";
const About = () => {
  return (
    <>
      <Layout>
        <AboutHeader />
        <AboutContent />
        <AboutTip />
        <AboutTeam />
        <ContactCard />
        <ContactHeader />
      </Layout>
    </>
  );
};

export default About;
