import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import { blogDetailMoreQuery, blogDetailQuery } from "../../../utils/GROC";
import { client } from "../../../client";

const PostDetails = () => {
  let id = useParams();
  let blogId = id.id;
  const [blogDetail, setBlogDetail] = useState([]);
  const [blogMore, setBlogMore] = useState([]);
  useEffect(() => {
    let bloDetailQuery = blogDetailQuery(blogId);
    if (bloDetailQuery) {
      client.fetch(blogDetailQuery).then((data) => {
        setBlogDetail(data[0]);
        console.log("blogDetail", data[0]);
        if (data[0]) {
          let queryMore = blogDetailMoreQuery(data[0]);
          client
            .fetch(queryMore)
            .then((data) => {
              setBlogMore(data);
              console.log("moreblog:", data);
            })
            .catch((err) =>
              console.log(err?.response?.body?.error?.description)
            );
        }
      });
    }
  });
  return (
    <>
      <Layout>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              {/**pass the post from the CMS */}
              <PostDetail blog={blogDetail} />
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
