import React, { Suspense, useState, useMemo } from "react";

import { unsplash } from "../utils/unsplash.js";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import InfiniteScroll from "react-infinite-scroll-component";
// import Photos from "./components/Photos";
// import SearchForm from "./components/SearchForm";
// import Sentence from "./components/Stats";
// import HeaderText from "./components/HeaderText";
// import Spinner from "./components/Spinner";
import {
  SearchForm,
  Sentence,
  HeaderText,
  Spinner,
} from "../components/gallery";
import { lazy } from "react";
const Photos = lazy(() => import("../components/gallery/Photos"));
const Gallery = () => {
  const [query, setQuery] = useState("Travel");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState("");
  const [photosCount, setPhotosCount] = useState(0);
  const perPage = 9;

  const onSearchPhoto = (searchTerms) => {
    setQuery(searchTerms);
    setLoading((prev) => prev);
    setPhotos([]);
  };

  const getMorePhotos = async (page) => {
    try {
      await unsplash.search
        .getPhotos({
          query: query,
          page: page,
          per_page: perPage,
        })
        .then((result) => {
          setPhotosCount(result.response.total);
          setTotal(result.response.total);
          setPage(page);
          photos.length
            ? setPhotos([...photos, ...result.response.results])
            : setPhotos(result.response.results);
        });
    } catch (error) {
      console.log(`unable to retrieve photos, reason: ${error}`);
    }
  };

  useEffect(() => {
    setPage(1);
    getMorePhotos(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  //const postSlice = photos.slice(1);
  console.log("loged photos", photos);
  return (
    <>
      <div className="Gallery">
        {/*text-[10px + 2vmin]  */}
        <div className="flex flex-row min-w-full h-[52vh] min-h-[350px]  text-md bg-cover overflow-hidden justify-center items-center">
          <div
            className="absolute min-w-full h-[52vh] top-0 bottom-0 bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:min-w-full after:h-full afetr:gallery-bg"
            style={{
              backgroundImage: photos.length
                ? `url(${photos[0].urls.regular})`
                : "",
            }}
          ></div>
          {/* heafer-form */}
          <div className="md:w-[35vw] z-10 w-[unset] lg:w-[50vw] ">
            <HeaderText />
            <SearchForm onSearchPhoto={onSearchPhoto} />
          </div>
        </div>
        i
        <Sentence stats={total} query={query} />
        <Suspense fallback={<Spinner />}>
          <div className="mt-0 mr-auto max-w-[1280px]">
            {/* 
              <InfiniteScroll
    dataLength={this.state.items.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={true}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
    {this.state.items.map((_, index) => (
      <div style={style} key={index}>
        div - #{index}
      </div>
    ))}
  </InfiniteScroll>
            
            */}
            <InfiniteScroll
              dataLength={photos.length}
              next={() => getMorePhotos(page + 1)}
              hasMore={loading}
            >
              {" "}
              {/* photos.slice(1) */}
              {loading ? (
                <>
                  <Photos photos={photos} />
                  {photos?.length === total && total !== 0 ? (
                    // end text
                    <div className="p-12 text-center font-semibold">
                      Yay! You have seen it all...
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </InfiniteScroll>
          </div>
        </Suspense>
        {/* <Photos photos={photos} /> */}
        <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" />
      </div>
    </>
  );
};

export default Gallery;
