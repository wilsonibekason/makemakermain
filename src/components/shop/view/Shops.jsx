import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogLayout, layout } from "../../../style";
import {
  Banner,
  HomeSwiper,
  Categories,
  ShopCardMain,
  ShopWidgets,
} from "../component";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { useStateShopContext } from "../../../state/OnShopContext";
import { fetchProductsQuery, fetchProductsCategory } from "../../../utils/GROC";
const Shops = () => {
  let id;
  id = useParams();
  let productID = id;
  const { blogMore } = useStateBlogContext();
  const { products, MainProducts, setMainProducts, setIsLoaded } =
    useStateShopContext();
  useEffect(() => {
    if (productID) {
      setIsLoaded(true);
      let query = fetchProductsCategory(productID);
    }
  }, [productID]);
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
