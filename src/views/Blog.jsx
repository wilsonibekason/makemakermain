import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Categories,
  Layout,
  PostCard,
  PostWidget,
} from "../components/blogs/components";
import { FeaturedPost } from "../components/blogs/sections";
import Blogs from "../components/blogs/views/Blogs";

const Blog = () => {
  return (
    <>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
};

export default Blog;
