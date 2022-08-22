import { useParams } from "react-router-dom";
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
import MoreBlogs from "../components/moreBlogs/MoreBlogs";
import { AdjacentPosts } from "../sections";
import {
  blogDetailMoreQuery,
  blogDetailQuery,
  getRelatedPost,
  // productDetailQuery,
} from "../../../utils/GROC";
import { client } from "../../../client";

const PostDetails = () => {
  let id = useParams();
  let blogId = id.id;
  console.log(blogId);
  const [blogDetail, setBlogDetail] = useState([]);
  const [blogMore, setBlogMore] = useState([]);
  const [blogRelated, setBlogRelated] = useState([]);

  const fetchBlogDetails = () => {
    const query = blogDetailQuery(blogId);
    if (blogDetailQuery(blogId)) {
      client
        .fetch(query)
        .then((data) => {
          setBlogDetail(data);
          if (data[0]) {
            const queryMore = blogDetailMoreQuery(data[0]);
            client
              .fetch(queryMore)
              .then((data) => {
                setBlogMore(data);
                console.log("recommeded products console", data[0]);
                console.log(data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
              });
          } else if (data[0]) {
            const relatedQuery = getRelatedPost(data[0]);
            client
              .fetch(relatedQuery)
              .then((data) => {
                setBlogRelated(data);
                console.log("recommeded products console", data[0]);
                console.log(data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    fetchBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

  console.log(blogDetail);
  console.log(blogRelated);
  return (
    <>
      <Layout>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              {/**pass the post from the CMS */}
              {blogDetail &&
                blogDetail?.map((blog) => <PostDetail {...blog} />)}

              {/** pass the post cms slug */}
              {blogDetail && blogDetail.map((author) => <Author {...author} />)}
              {/** more blog posts */}

              <MoreBlogs blogs={blogMore} />
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
                <PostWidget related={blogRelated} />
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
