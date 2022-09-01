import React from "react";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";
import styles from "../../../style";

const Banner = () => {
  const { productBanner, products } = useStateShopContext();
  const navigate = useNavigate();
  const randomizer = products[Math.floor(Math.random() * products?.length)];
  console.log(randomizer);

  return (
    <>
      <div className="border  border-gray-500 bg-gray-200 rounded-lg group relative">
        {/** FIRST BANNEER UI */}

        {/** SECOND BANNER DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-6">
            <div className="flex flex-1 flex-col items-center mx-4">
              <div
                className={`font-robotoCondensed font-semibold text-black xs:text-[40px] text-[40px] xs:leading-[40px] leading-[40px] my-4 py-3
                `}
              >
                {productBanner?.title}
              </div>
              <div>
                <button
                  type="button"
                  className={`${styles.buttonOutline} text-black border-black font-poppins`}
                  onClick={() =>
                    navigate(`/product/${randomizer?.slug?.current}`, {
                      replace: true,
                    })
                  }
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6">
            <div className=" items-center ">
              {productBanner.image && (
                <img
                  src={urlFor(productBanner?.image)}
                  alt=""
                  className="w-[60%] h-[60%] object-cover "
                />
              )}
            </div>
          </div>
        </div>
        {/* <div className="relative w-full select-none">
              <div className="aspect-w-16 aspect-h-[5.3]">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                  alt=""
                  className="object-center"
                />
              </div>
            </div> */}
      </div>
    </>
  );
};

export default Banner;
