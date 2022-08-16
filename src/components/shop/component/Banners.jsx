import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shopImages } from "../../../utils/data";
const Banners = () => {
  return (
    <>
      <div className="relative max-w-screen-xl mx-auto">
        {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={true}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className=" ">
            <img
              src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg"
              alt=""
              loading="lasy"
              className="object-cover"
            />
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
              alt=""
              loading="lasy"
              className="object-cover"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ebzTNpfnnUqADD-9bqPeXI5l3kUrzBa3mg&usqp=CAU"
              alt=""
              loading="lasy"
              className="object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banners;
