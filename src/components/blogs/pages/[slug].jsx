import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Author,
  Categories,
  CommentForm,
  Comments,
  Layout,
  PostDetail,
  PostWidget,
} from "../components";
import { AdjacentPosts } from "../sections";

const PostDetails = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              {/**pass the post from the CMS */}
              <PostDetail />
              {/** pass the post cms slug */}
              <Author />
              {/** pass the post cms slug */}
              <AdjacentPosts />
              {/** pass the comment form */}
              <CommentForm />
              {/** render the comments from the cms */}
              <Comments />
            </div>
            {/** add the structure for the side content*/}
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                {/** pass the post slug and the post category slug */}
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PostDetails;
