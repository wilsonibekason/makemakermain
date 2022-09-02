import React from "react";
import Layout from "./Layout";
import HeaderText from "./HeaderText";
import SearchForm from "./SearchForm";
const Page = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-row min-w-full h-[52vh] min-h-[350px] text-md bg-cover overflow-hidden justify-center items-center ">
          <div
            className="absolute w-full h-[52vh] top-16 bottom-0 bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMDQ5Mjd8MHwxfHNlYXJjaHw3fHxUcmF2ZWx8ZW58MHx8fHwxNjYyMTA2MDI1&ixlib=rb-1.2.1&q=80&w=1080")`,
            }}
          />
          <div className="w-[unset] min-w-[35vw] z-10 lg:w-[unset] mx-auto">
            <HeaderText />
            <SearchForm />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Page;
