import React from "react";
import { Categories, PostCard, PostWidget } from "../components";
import { FeaturedPost } from "../sections";

const Blogs = () => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8 ">
        <FeaturedPost />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            <PostCard />
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
