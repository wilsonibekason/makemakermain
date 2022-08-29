import React from "react";
import styles from "../../../style";
import {
  Layout,
  AboutHeader,
  AboutContact,
  AboutTip,
  AboutTeam,
  ContactCard,
  ContactHeader,
} from "../component";
const About = () => {
  return (
    <>
      <Layout>
        <AboutHeader />
        <div className={` white__bg ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <AboutContact />
            <AboutTip />
            <AboutTeam />
            <ContactCard />
            <ContactHeader />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
