import React from "react";
import { AdjacentPostCard } from "../components";

const AdjacentPosts = (adjacentPost) => {
  // console.log("pre post", adjacentPost?.adjacentPost?.currentPost);
  // console.log("pre post", adjacentPost?.adjacentPost?.previousPost);
  /**currentPost
previousPost
nextPost */
  console.log();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 ">
        {adjacentPost?.adjacentPost?.previousPost && (
          <div
            className={`${
              adjacentPost?.adjacentPost?.nextPost
                ? "col-span-1 lg:col-span-4"
                : "col-span-1 lg:col-span-8"
            } adjacent-post rounded-lg relative h-72`}
          >
            <AdjacentPostCard
              post={adjacentPost?.adjacentPost?.previousPost}
              position="LEFT"
            />
          </div>
        )}
        {adjacentPost?.adjacentPost?.nextPost && (
          <div
            className={`${
              adjacentPost?.adjacentPost?.previousPost
                ? "col-span-1 lg:col-span-4"
                : "col-span-1 lg:col-span-8"
            } adjacent-post rounded-lg relative h-72`}
          >
            <AdjacentPostCard
              post={adjacentPost?.adjacentPost?.nextPost}
              position="RIGHT"
            />
          </div>
        )}
        {/* <div className={`col-span-1 lg:col-span-4 rounded-lg relative h-72`}>
          <AdjacentPostCard postiob="LEFT" />
        </div>
        <div className={`col-span-1 lg:col-span-4 rounded-lg relative h-72`}>
          <AdjacentPostCard postiob="RIGHT" />
        </div> */}
      </div>
    </>
  );
};

export default AdjacentPosts;
