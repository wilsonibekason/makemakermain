export default {
  name: "cardDeal",
  title: "CardDeal",
  description:
    "this is a schema about the company, make sure to upload a 1000by 600 pixel image",
  type: "document ",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
