// initialising postBlogQuery

/*

const posts = await Sanity.fetch(`*[_type == 'post' && _id == '${currentPost.id}' ][0] {
  'currentPost': {
    ...
  },
  'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
  'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
}`);

const currentPostIndex = posts.findIndex(post => post.id === currentPost.id);
const previousPost = posts[currentPostIndex - 1];
const nextPost = posts[currentPostIndex + 1];

*/
export const postBlogQuery = `*[_type == "post"]{
    _id,
     title,
        slug,
        publishedAt,
        author->{
    name,
    image
      },
    description,
    mainImage,
    slug,
    category,
   categories[] {
     categorys->{ 
      title,
      slug 
     },
    },
    }`;

/// query for fetching products
export const fetchProductsQuery = `*[_type == "product"]{
      _id,
      title,
      tags,
      slug,
      body,
      specificCategory,
      defaultProductVariant,
      categories[] {
        category->{
           title,
           description,
           slug,
           family,
        },
      },
  }`;
/// quering to get featuredBlog post
export const getFeaturedPosts = () => {
  const query = `*[_type == "post"]{
        _id,
         title,
            slug,
            publishedAt,
            author->{
        name,
        image
          },
        description,
        mainImage,
        slug
        }`;
  return query;
};

//// querying for related post
export const getRelatedPost = (post) => {
  const query = `*[_type == "post" && categry == '${post?.category}' && _id != '${post?._id}']{
  mainImage{
    asset->{
      url
    }
  },
  _id,
  slug,
  title,
  description,
  author->{
    name,
    image,
  }
}`;
  return query;
};

/// fetching category based blogs for our blogs
export const blogDetailMoreQuery = (product) => {
  const query = `*[_type == "post" && category == '${product?.category}' && _id != '${product?._id}']{
      mainImage{
        asset->{
          url
        }
      },
      _id,
      title,
      slug,
      description,
      publishedAt,
      author->{
        name,
        image
      }
    }`;
  return query;
};
// *[_type == "post" && category == 'programming' && _id != '38bb1ae2-c512-4863-8f80-00ada8d02e9a']{
//   _id,
//   _createdAt,
//   title,
//   author ->{
//     name,
//     image,
//   } ,
//   'blogComments': *[_type == "blogComments" && post._ref == ^._id && approved == true],
//   description,
//   mainImage,
//   slug,
//   body
// }

export const blogMoreQuery = () => {
  const query = `*[_type == 'category']{
      title,
     'id':*[defined(categories) && _type == 'product' && references(^._id)][0]{
     _id
    }
    }[defined(id)]`;
  return query;
};

// categories[] {
//   category-> { name }
// }
// {singlePost.categories.map { |c| c.category.name }.join(", ")

// query for recentpost

export const blogRecentPost = (blogId) => {
  const query = `*[_type == "post" && category == '${blogId?.category}' && _id != '${blogId?._id}']{
      _id, 
      title,
      description,
      publishedAt,
    }`;
  return query;
};
// initialsing for fetching tags and categories
export const tagsCategories = (blogId) => {
  const query = `*[_type == "post" && _id  == '${blogId}']{
      categories -> {
         category
       }
    }`;
  return query;
};

// initialsing blogcomments
export const blogComments = `*[_type == "blogComments"]{
      fullName,
      email,
      title,
      message,
      _updatedAt,
      _createdAt,
    }`;
// initialsing productscomments
export const productReview = `*[_type == "reviews"]{
      name,
      email,
      review,
      _updatedAt,
      _createdAt,
    }`;

/// fetching each blog query
/**
 *  mainImage{
        asset->{
          url
        }
      },
 */
export const blogDetailQuery = (postId) => {
  const query = `*[_type == "post" && slug.current == '${postId}']  | order(_updatedAt desc) {
     mainImage{
      asset->{
        url
      }
     },
      _id,
      _createdAt,
      title,
      author ->{
        name,
        image,
        bio,
      },
      'blogComments': *[_type == "comment" && post._ref == ^._id && approved == true],
      description,
      slug,
      body,
      tags,
      category
    }`;
  return query;
};
/// querying foBlogr categories blogs
export const getBlogCategories = (productspecificCategory) => {
  const query = `*[_type == "post" && category == '${productspecificCategory}']{
    _id,
    title,
       slug, 
       publishedAt,
       author->{
   name,
   image
     },
   description,
   mainImage,
   slug,
   category,
  categories[] {
    categorys->{ 
     title,
     slug 
    },
   },
  }`;
  return query;
};
export const getBlogComments = (productId) => {
  const query = `*[_type == "post" && slug.current == '${productId}'] | order(_updatedAt desc) {
 
    _id,
    title,
    tags,
    slug,
    body,
    specificCategory,
    defaultProductVariant,
    categories[] {
      category->{
         title,
         description,
         slug,
         family,
      },
      },
    body,
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
      _id,
      name,
      email,
      review,
      _createdAt
    }
  }`;
  return query;
};
/*
const posts = await Sanity.fetch(`*[_type == 'post' && _id == '${currentPost.id}' ][0] {
  'currentPost': {
    ...
  },
  'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
  'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
}`);
const currentPostIndex = posts.findIndex(post => post.id === currentPost.id);
const previousPost = posts[currentPostIndex - 1];
const nextPost = posts[currentPostIndex + 1];
*/

// *[_type == 'post' && _id == '9df01ee4-8758-481b-9578-91b558b18413' ][0] {
//   'currentPost': {
//     ...
//   },
//   'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
//   'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
// }

export const getAdjacentPosts = (currentPost) => {
  const query = ` *[_type == 'post' && _id == '${currentPost._id}' ][0] {
    'currentPost': {
      ...
    },
    'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
    'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
  }
  `;
  return query;
};

export const CurrentPost = (currentPost) => {
  const query = `*[_type == "post" && _id == '${currentPost.id}' ]{
    mainImage{
      asset->{
        url
      }
    },
    _id,
    title,
    slug,
    description,
    publishedAt,
    author->{
      name,
      image
    }
  }`;
  return query;
};
// export const previousPost = () => {
//   const query = `*[_type == "post" ]`
// }
// initialising productDetailQuery image{  asset->{   url   }  },
export const productDetailQuery = (productId) => {
  const query = `*[_type == "product" && slug.current == '${productId}']{
          _id,
          title,
          tags,
          slug,
          body,
          specificCategory,
          defaultProductVariant,
          categories[] {
            category->{
               title,
               description,
               slug,
               family,
            },
            },
      }`;
  return query;
};

///// queying for the blogcomments

// initialising moreproductDetai ls query

export const moreProductQuery = (product) => {
  const query = `*[_type == "product" && specificCategory == '${product?.specificCategory}' && _id != '${product?._id}']
  {
    _id,
    title,
    tags,
    slug,
    body,
    specificCategory,
    defaultProductVariant,
    categories[] {
      category->{
         title,
         description,
         slug,
         family,
      },
      },
}`;
  return query;
};

/// qeruying for product categories
export const fetchProductsCategory = (categoryId) => {
  const query = `*[_type == "product" && specificCategory == '${categoryId}'] {
    _id,
    title,
    tags,
    slug,
    body,
    specificCategory,
    defaultProductVariant,
    categories[] {
      category->{
         title,
         description,
         slug,
         family,
      },
    },
}`;
  return query;
};

// initialising productDetailMoreQuery
// export const moreProductQuery = (product) => {
//   const query = `*[_type == "product" && category == '${product?.category}' && _id != '${product?._id}']{
//       image{
//           asset->{
//               url
//           }
//       },
//       _id,
//       title,
//       product,
//       publishedAt,
//       description,
//       price,
//       productImage
//      }`;
//   return query;
// };

// initialising relatedproductsQuery
/// initialising categories item schema quary
export const category = () => {
  const query = `*[_type == "category"]{
    title,
    slug,
    description,
    _created,
    _updated,
    _type,
    family
  }`;
  return query;
};
