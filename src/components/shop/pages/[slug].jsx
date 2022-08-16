import React from "react";
import { shopLayout } from "../../../style";
import {
  Banner,
  Layout,
  MoreProductCard,
  ShopDetail,
  ShopImages,
} from "../component";
import ProductDetailsMore from "../component/ProductDetailsMore";

const ShopDetails = () => {
  return (
    <>
      <Layout>
        <div className={`${shopLayout.section} mt-24`}>
          <div className={`${shopLayout.sectionGrid}`}>
            <div className={`${shopLayout.sectionGridDivider}`}>
              <ShopImages />
            </div>
            <div className={`${shopLayout.sectionGridDivider2}`}>
              <ShopDetail />
            </div>
          </div>
          {/** banner and advertisement **/}
          <div className={`${shopLayout.sectionTripplix} mt-4 mx-[1rem]`}>
            <div className={`${shopLayout.sectionTripplix1}`} />
            <div className={`${shopLayout.sectionTripplix2}`}>
              <ProductDetailsMore />
            </div>
            <div className={`${shopLayout.sectionTripplix3}`} />
          </div>
          <div className={`${shopLayout.sectionGridMultix}`}>
            <MoreProductCard />
          </div>
          {/** banner and advertisement **/}
          <div className={`${shopLayout.sectionTripplix} mt-4 mx-[1rem]`}>
            <div className={`${shopLayout.sectionTripplix1}`} />
            <div className={`${shopLayout.sectionTripplix2}`}>
              <Banner />
            </div>
            <div className={`${shopLayout.sectionTripplix3}`} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShopDetails;
