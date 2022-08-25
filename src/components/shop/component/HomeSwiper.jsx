import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  /**SwiperCore */ Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSwiper = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        loop
        speed={500}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover black_bg"
              style={{
                backgroundImage: `url('https://treasurytoday.com/-/media/images/treasury-practice/corporate-strategy/2017-09and10-tt-02-ia__freight-shipping-service-online-shopping-ecommerce-ss702046183__1920x1080.jpg')`,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover "
              style={{
                backgroundImage: `url('https://i0.wp.com/www.digitalmoneyinforme.com.br/wp-content/uploads/2021/11/carrinho-de-compras-em-frente-a-um-computado-e-commerce-freepik-2021-digital-money-informe.jpg?fit=936%2C600')`,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover "
              style={{
                backgroundImage: `url('https://i0.wp.com/cine21.ng/wp-content/uploads/2022/08/nope-official.jpg?resize=1024%2C706&ssl=1')`,
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSwiper;
