import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../client";
import {
  productDetailQuery,
  productDetailMoreQuery,
} from "../../../utils/GROC";
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
  let id = useParams();
  let productId = id.id;
  ///////////////
  // DEFINE STATES
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [productDetailsMore, setProductDetailsMore] = useState();
  const [error, setError] = useState(null);

  // DEFINE STATES

  // fetching productDetails
  const fetchProductDetails = () => {
    const query = productDetailQuery(productId);
    if (productDetailQuery(productId)) {
      client
        .fetch(query)
        .then((data) => {
          setProductDetails(data[0]);
          console.log(data);
          setLoading(false);
          if (data[0]) {
            const queryMore = productDetailMoreQuery(data[0]);
            client
              .fetch(queryMore)
              .then((data) => {
                setProducts(data);
                console.log(data[0]);
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
  }, [productId]);

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
