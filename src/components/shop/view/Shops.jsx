import React from "react";
import { blogLayout, layout } from "../../../style";
import {
  Banner,
  Banners,
  // BannerShop,t
  HomeSwiper,
  Categories,
  // ShopCard,
  ShopCardMain,
  ShopWidgets,
} from "../component";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { useStateShopContext } from "../../../state/OnShopContext";
const Shops = () => {
  const { blogs, blogMore } = useStateBlogContext();
  const { products } = useStateShopContext();
  console.log("shop blogs", blogs);
  console.log("shop blogs", blogMore);
  return (
    <>
      <div className={`${blogLayout.section} `}>
        <HomeSwiper />
        {/* <Banners /> */}
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
              {blogMore && <ShopWidgets blogs={blogMore} />}
              {/* {blogMore && blogMore?.map((blog) => <Categories {...blog} />)} */}
              {products && <Categories products={products} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
