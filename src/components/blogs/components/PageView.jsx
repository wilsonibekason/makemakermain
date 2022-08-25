import { urlFor } from "../../../client";

const PageView = ({ mainImage, title }) => {
  return (
    <>
      <div
        className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover opacity-20 backdrop-blur-md"
        style={{
          // backgroundImage: `url('https://cdn.sanity.io/images/zyte9ttg/production/954acc767428e83ed6ecb160efb061bfb33a2255-660x440.jpg')`,
          backgroundImage: `url('${urlFor(mainImage).url()}')`,
        }}
      />
      <div className="absolute items-center capitalize font-raleway font-semibold text-2xl text-gray-700 ">
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default PageView;
