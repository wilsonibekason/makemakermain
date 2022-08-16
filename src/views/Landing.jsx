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
      <div className="bg-primary w-full overflow-hidden">
        {/** navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/** hEADER or HERO*/}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        {/** hEADER or HERO*/}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <OtherPage />
            <Testimonials />

            <ClientSections />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
