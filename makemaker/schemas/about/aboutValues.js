export default {
  name: "aboutValues",
  title: "AboutValues",
  description: "",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "bgImage",
      title: "BgImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "iconImg",
      title: "Icon Image",
      type: "string",
    },
  ],
};
