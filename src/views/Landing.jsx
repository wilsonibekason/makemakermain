import React from "react";
import styles from "../style";
import {
  Navbar,
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  ClientSections,
  FeedBackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
  OtherPage,
} from "../components/landing";
const App = () => {
  return (
    <>
      <div className="blue__bg w-full overflow-hidden">
        {/** navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/** hEADER or HERO*/}
        <div className={`white__bg ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        {/** hEADER or HERO*/}
        <div className={` white__bg ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <OtherPage />
            <Testimonials />

            <ClientSections />
            <CTA />
            <div className="blue__bg rounded-t-xl">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
