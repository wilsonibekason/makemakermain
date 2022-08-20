import React from "react";
import { blogLayout, layout } from "../../../style";
import {
  Banner,
  Banners,
  BannerShop,
  Categories,
  ShopCard,
  ShopCardMain,
  ShopWidgets,
} from "../component";

const Shops = () => {
  return (
    <>
      <div className={`${blogLayout.section} `}>
        {/* <BannerShop /> */}
        <Banners />

        <div className={`${layout.grid} mt-4 mx-[1rem]`}>
          <div className={`${layout.gridContents}`}>
            {/* <ShopCard /> */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mx-4">
              <ShopCardMain />
            </div>
            <div className="block md:block mt-2 mb-16">
              <Banner />
            </div>
          </div>
          <div className={`${layout.gridSidebar}`}>
            <div className={`${layout.gridSideStatus}`}>
              <ShopWidgets />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
