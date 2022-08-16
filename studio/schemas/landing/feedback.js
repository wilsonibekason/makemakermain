export default {
  name: "feedback",
  title: "Feedback",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      required: true,
    },
  ],
};
