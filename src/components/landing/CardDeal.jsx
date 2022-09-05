import React from "react";
import { useNavigate } from "react-router-dom";
import { card } from "../../assets/assets";
import styles from "../../style";
import { layout } from "../../style";
import { useStateContext } from "../../state/OnLandingContext";
import Button from "./Button";
const CardDeal = () => {
  const { cardDeal, urlFor } = useStateContext();
  //TODO:
  console.log(cardDeal);
  console.log(urlFor);
  const navigate = useNavigate();
  const link = () => navigate("/product", { replace: true });
  return (
    <section className={layout.section}>
      {cardDeal &&
        cardDeal?.map((card, index) => (
          <>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading5}>
                We are working to make the earth a better place for everyone to
                live <br className="sm:block hidden" />
                with the following steps
              </h2>
              <p className={`${styles.paragraph2} max-w-[470px] mt-5 `}>
                {/* All the energy we generate comes from 100% renewable sources. We
          believe renewable energy is the only way forward for the future of our
          planet. Make Maker is working to make energy more affordable to small
          businesses and households. */}
                {card?.description}
              </p>
              <Button styles="mt-10" navigate={link} />
            </div>
            <div className={layout.sectionImg}>
              <img
                // src={card}
                // src={
                //   "https://jambekcom.com/wp-content/uploads/2022/05/Customer-with-smiling-JP200-in-office_Jambekcom-1.jpg"
                // }
                src={urlFor(card?.image)}
                alt="card"
                className="w-[100%] h-[100%] relative z-[50] rounded-lg "
              />
            </div>
          </>
        ))}
    </section>
  );
};

export default CardDeal;
