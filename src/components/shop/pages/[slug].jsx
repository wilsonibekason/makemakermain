import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../client";
import { productDetailQuery, moreProductQuery } from "../../../utils/GROC";
import { shopLayout } from "../../../style";
// import { useStateShopContext } from "../../../state/OnShopContext";
import {
  Banner,
  Layout,
  MoreProductCard,
  ShopDetail,
  ShopImages,
} from "../component";
import ProductDetailsMore from "../component/ProductDetailsMore";

const ShopDetails = () => {
  // const { index, setIndex } = useStateShopContext();
  let id = useParams();
  let productId = id.id;
  ///////////////
  // DEFINE STATES
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);
  // const [productDetailsMore, setProductDetailsMore] = useState([]);
  const [error, setError] = useState(null);
  // DEFINE STATES
  // fetching productDetails
  const fetchProductDetails = () => {
    const query = productDetailQuery(productId);
    if (productDetailQuery(productId)) {
      client
        .fetch(query)
        .then((data) => {
          setProductDetails(data);
          console.log(data);
          setLoading(false);
          if (data[0]) {
            const queryMore = moreProductQuery(data[0]);
            client
              .fetch(queryMore)
              .then((data) => {
                setProducts(data);
                /// TODO:
                console.log("recommeded products console", data[0]);
                console.log(data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
                setError(error?.response?.message);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(error?.response?.message);
        });
    }
  };

  // CALL FUNCTIONS
  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  //TODO:
  console.log(productDetails);
  console.log("====================================");
  console.log("Everything: ", productDetails);
  console.log("====================================");
  return (
    <>
      <Layout>
        <div className={`${shopLayout.section} mt-32`}>
          <div className={`${shopLayout.sectionGrid}`}>
            <div className={`${shopLayout.sectionGridDivider}`}>
              {productDetails &&
                productDetails?.map((productDetail, index) => (
                  <ShopImages {...productDetail} key={index} />
                ))}
            </div>
            <div className={`${shopLayout.sectionGridDivider2}`}>
              {productDetails &&
                productDetails?.map((productDetail, index) => (
                  <ShopDetail
                    {...productDetail}
                    productDetail={productDetail}
                    key={index}
                  />
                ))}
            </div>
          </div>
          {/** banner and advertisement **/}
          <div className={`${shopLayout.sectionTripplix} mt-4 mx-[1rem]`}>
            <div className={`${shopLayout.sectionTripplix1}`} />
            <div className={`${shopLayout.sectionTripplix2}`}>
              {productDetails &&
                productDetails?.map((productDetail, index) => (
                  <ProductDetailsMore {...productDetail} key={index} />
                ))}
            </div>
            <div className={`${shopLayout.sectionTripplix3}`} />
          </div>
          <div className={`${shopLayout.sectionGridMultix}`}>
            {products ? (
              products.map((product, index) => (
                <MoreProductCard {...product} key={index} product={product} />
              ))
            ) : (
              <h1>none </h1>
            )}
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
