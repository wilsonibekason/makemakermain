import React, { Suspence, lazy } from "react";
import { useStateContext } from "../state/OnLandingContext";
import ScrollToTop from "react-scroll-to-top";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Layout,
  HeaderText,
  Sentence,
  SearchForm,
  Photos,
  Spinner,
} from "../components/mainGallery";
import { urlFor } from "../client";
// const Photos = lazy(() => import("../components/mainGallery/Photos"));
const MainGallery = () => {
  const { galleryImage, galleryHeader, loading } = useStateContext();
  const photoImages = galleryImage.map((item) => item?.images);
  const itemImages = galleryImage.map((item) => item?.images);
  const bgImage = photoImages?.map((item) => item[0]);
  const total = [photoImages].slice(-1).pop().length;
  const totalImages = [photoImages].slice(-1)[0];
  const last = photoImages[photoImages.length - 1];
  const bgIMG = Object.assign({}, ...bgImage);

  console.log(galleryImage);
  console.log(total);
  // console.log(photoImages.map((item) => item[0]));
  console.log(itemImages[0]);
  console.log(totalImages[0]);
  console.log(bgImage);
  // console.log(Object.assign({}, ...bgImage));
  console.log(totalImages.length);
  console.log(last);
  return (
    <>
      <Layout>
        <div className="flex flex-row min-w-full h-[52vh] min-h-[350px] text-md bg-cover overflow-hidden justify-center items-center ">
          <div
            className="absolute w-full h-[52vh] top-16 bottom-0 bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: photoImages.length
                ? `url("${urlFor(bgIMG)}")`
                : `url( "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMDQ5Mjd8MHwxfHNlYXJjaHw3fHxUcmF2ZWx8ZW58MHx8fHwxNjYyMTA2MDI1&ixlib=rb-1.2.1&q=80&w=1080")`,
            }}
          />
          <span className="w-full h-[52vh] absolute opacity-75 bg-black-gradient"></span>
          {/* after:content-[''] after:absolute after:top-0 after:left-0 after:min-w-full after:h-full after:gallery-bg */}
          <div className="w-[unset] min-w-[35vw] z-10 lg:w-[unset] mx-auto ">
            <HeaderText header={galleryHeader} />
            <SearchForm />
          </div>
        </div>
        <div className="flex justify-center relative items-center">
          <Sentence />
        </div>
        <div className="mx-auto w-[1280px]">
          {/* <Suspence fallback={<Spinner />}> */}
          {/* <InfiniteScroll
            dataLength={itemImages[0].length}
            hasMore={loading}
            // next={() => getMorePhotos(page + 1)}
          > */}
          <Photos photos={itemImages[0]} />

          {loading ? (
            <>
              {/* photos.slice(1) */}
              {/* {itemImages[0].map((item, index) => {
                  return <Photos key={index} photos={item} />;
                })} */}
              <Photos photos={itemImages[0]} />
              {photoImages.length === total && totalImages.length !== 0 ? (
                <div className="text-lg md:text-xl font-semibold text-center text-black font-poppins capitalize ">
                  this is the end of
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          {/* </InfiniteScroll> */}
          {/* </Suspence> */}
        </div>
        <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" />
      </Layout>
    </>
  );
};

export default MainGallery;
