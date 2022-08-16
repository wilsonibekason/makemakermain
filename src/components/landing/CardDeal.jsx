import React from "react";
import { card } from "../../assets/assets";
import styles from "../../style";
import { layout } from "../../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find an easy card deal <br className="sm:block hidden" />
          with the following steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          quaerat nobis maxime quisquam veritatis consequuntur temporibus!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] relative z-[50]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
