import React, { useEffect, useMemo, useState, Suspence, lazy } from "react";
import Layout from "./Layout";
import HeaderText from "./HeaderText";
import SearchForm from "./SearchForm";
import Sentence from "./Stats";
import Spinner from "./Spinner";
import { unsplash } from "../../utils/unsplash";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
// const Photos = lazy(() => import("./Photos"));
import Photos from "./Photos";
const Page = () => {
  const [query, setQuery] = useState("Science");
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState("");
  const [photosCount, setPhotosCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 12;
  const onSearchPhotos = (searchTerm) => {
    setQuery(searchTerm);
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
        .then(({ response }) => {
          setPhotosCount(response.total);
          setTotal(response.total);
          console.log(response);
          setPage(page);
          photos.length
            ? setPhotos([...photos, ...response.results])
            : setPhotos(response.results);
        })
        .catch(
          (error) => new Error("failed to fetch request") && console.log(error)
        );
    } catch (error) {
      console.log("sorry we failed to looad the photos because : " + error);
    }
  };

  useEffect(() => {
    setPage(1);
    getMorePhotos(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  console.log("logged pictures" + photos.color);
  console.log(photos);
  return (
    <>
      <Layout>
        <div className="flex flex-row min-w-full h-[52vh] min-h-[350px] text-md bg-cover overflow-hidden justify-center items-center ">
          <div
            className="absolute w-full h-[52vh] top-16 bottom-0 bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: photos.length
                ? `url(${photos[0].urls.regular})`
                : "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMDQ5Mjd8MHwxfHNlYXJjaHw3fHxUcmF2ZWx8ZW58MHx8fHwxNjYyMTA2MDI1&ixlib=rb-1.2.1&q=80&w=1080",
            }}
          />
          <span className="w-full h-[52vh] absolute opacity-75 bg-black-gradient"></span>
          {/* after:content-[''] after:absolute after:top-0 after:left-0 after:min-w-full after:h-full after:gallery-bg */}
          <div className="w-[unset] min-w-[35vw] z-10 lg:w-[unset] mx-auto ">
            <HeaderText />
            <SearchForm onSearchPhoto={onSearchPhotos} />
          </div>
        </div>
        <div className="flex justify-center relative items-center">
          <Sentence stats={total} query={query} />
        </div>
        {/* <Suspence fallback={<Spinner />}> */}
        <div className="mt-0 mx-auto w-[1280px]">
          <InfiniteScroll
            dataLength={photos.length}
            hasMore={loading}
            next={() => getMorePhotos(page + 1)}
          >
            {loading ? (
              <>
                <Photos photos={photos.slice(1)} />
                {photos.length === total && total !== 0 ? (
                  <div className="text-lg md:text-xl font-semibold text-center text-black font-poppins capitalize ">
                    this is the end of {query}
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
        {/* </Suspence> */}
        {/* render the scrolltoop component */}
        <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" />
      </Layout>
    </>
  );
};
export default Page;
