import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogCategories, postBlogQuery } from "../../../utils/GROC";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import { Categories, PostCard, PostWidget } from "../components";
import { FeaturedPost } from "../sections";
import { client } from "../../../client";

const Blogs = () => {
  const { blogs, setIsLoaded, setBlogs } = useStateBlogContext();
  let id;
  id = useParams();
  let categoryId = id?.id;

  useEffect(() => {
    if (categoryId) {
      setIsLoaded(true);
      let query = getBlogCategories(categoryId);
      client.fetch(query).then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        const timer = setTimeout(() => {
          setBlogs(data);
        }, 2000);
        // cancle the timer while unmounting
        setIsLoaded(false);
        return () => clearTimeout(timer);
      });
    } else {
      setIsLoaded(true);
      client.fetch(postBlogQuery).then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        const timer = setTimeout(() => {
          setBlogs(data);
        }, 2000);
        // cancle the timer while unmounting
        setIsLoaded(false);
        return () => clearTimeout(timer);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return (
    <>
      {blogs ? (
        <div className="container mx-0 lg:mx-auto px-10 mb-8 ">
          <FeaturedPost />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
              {blogs &&
                blogs?.map((blog, index) => <PostCard {...blog} key={index} />)}
            </div>
            <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8">
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>hello</h1>
      )}
    </>
  );
};

export default Blogs;
