// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import productVariant from "./productVariant";
import productBanner from "./productBanner";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import clients from "./landing/clients";
import features from "./landing/features";
import feedback from "./landing/feedback";
import footerlink from "./landing/footerlink";
import footerMain from "./landing/footerMain";
import socialmedia from "./landing/socialmedia";
import stats from "./landing/stats";
import author from "./blogs/author";
import blockContents from "./blogs/blockContents";
import post from "./blogs/post";
import comment from "./blogs/comment";
import newsletter from "./blogs/newsletter";
import blogComments from "./blogs/blogComments";
import logo from "./logo";
import review from "./review";
/// make import for about schemas
import aboutHeader from "./about/aboutHeader";
import sectionContent from "./about/sectionContent";
import aboutSection from "./about/aboutSection";
import aboutTip from "./about/aboutTip";
import cardContent from "./about/cardContent";
import aboutTeam from "./about/aboutTeam";
import aboutComment from "./about/aboutComment";
import contactHeader from "./about/contactHeader";
import contactCard from "./about/contactCard";
import aboutValues from "./about/aboutValues";
// import { features, feedback, footerLinks } from '../../src/utils/data'
import image from "./gallery/image";
import header from "./gallery/header";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    review,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    // landing page schemas
    clients,
    features,
    feedback,
    footerlink,
    socialmedia,
    stats,
    productBanner,
    footerMain,
    /// blog schemas
    author,
    blockContents,
    blogComments,
    comment,
    newsletter,
    post,
    ///// about schemas
    aboutHeader,
    sectionContent,
    aboutSection,
    aboutTip,
    cardContent,
    aboutTeam,
    aboutComment,
    contactHeader,
    contactCard,
    aboutValues,
    // logo
    logo,
    // gallery
    image,
    header,
  ]),
});
