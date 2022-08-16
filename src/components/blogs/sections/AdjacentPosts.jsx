import React from "react";
import { AdjacentPostCard } from "../components";

const AdjacentPosts = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 ">
        <div className={`col-span-1 lg:col-span-4 rounded-lg relative h-72`}>
          <AdjacentPostCard postiob="LEFT" />
        </div>
        <div className={`col-span-1 lg:col-span-4 rounded-lg relative h-72`}>
          <AdjacentPostCard postiob="RIGHT" />
        </div>
      </div>
    </>
  );
};

export default AdjacentPosts;
