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
  PageView,
} from "../components";
import { useStateBlogContext } from "../../../state/OnBlogContext";
import MoreBlogs from "../components/moreBlogs/MoreBlogs";
import { AdjacentPosts } from "../sections";
import {
  blogDetailMoreQuery,
  blogDetailQuery,
  getRelatedPost,
  CurrentPost,
  getAdjacentPosts,
} from "../../../utils/GROC";
import { client } from "../../../client";

const PostDetails = () => {
  const { blogs } = useStateBlogContext();
  let id = useParams();
  let blogId = id.id;
  console.log(blogId);
  const [blogDetail, setBlogDetail] = useState([]);
  const [blogMore, setBlogMore] = useState([]);
  const [blogRelated, setBlogRelated] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [adjacentPosts, setAdjacentPosts] = useState([]);

  ////

  const fetchBlogDetails = () => {
    const query = blogDetailQuery(blogId);
    if (blogDetailQuery(blogId)) {
      client
        .fetch(query)
        .then((data) => {
          console.log("--------------------------------");
          console.log("productDetails products console", data);
          console.log("--------------------------------");
          setBlogDetail(data);
          if (data[0]) {
            const adjacentQuery = getAdjacentPosts(data[0]);
            client
              .fetch(adjacentQuery)
              .then((data) => {
                setAdjacentPosts(data);
                console.log("adjacent products console", data);
                console.log(data);
                console.log("posts", data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
              });
          } else if (data[0]) {
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
          } else if (data[0]) {
            const currentQuery = CurrentPost(data[0]);
            client
              .fetch(currentQuery)
              .then((data) => {
                console.log("the currentposts items ", data);
                setCurrentPosts(data);
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

  return (
    <>
      <Layout>
        <div className="relative min-h-[calc(80vh-100px)] lg:min-h-[60vh] pt-16 pb-32 flex content-center items-center justify-center border border-solid border-gray-300 rounded-lg">
          {/* <PageView /> */}
          {blogDetail && blogDetail?.map((blog) => <PageView {...blog} />)}
        </div>

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
              <AdjacentPosts adjacentPost={adjacentPosts} />
              {/** pass the comment form */}
              <CommentForm />
              {/** render the comments from the cms */}
              {blogDetail &&
                blogDetail?.map((comments) => <Comments {...comments} />)}
            </div>
            {/** add the structure for the side content*/}
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                {/** pass the post slug and the post category slug */}
                {/* <PostWidget related={blogRelated} /> */}
                {blogDetail &&
                  blogDetail?.map((blog) => (
                    <PostWidget related={blogRelated} {...blog} />
                  ))}
                {blogDetail &&
                  blogDetail?.map((blog) => <Categories {...blog} />)}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PostDetails;
