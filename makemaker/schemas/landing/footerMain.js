export default {
  name: "footerMain",
  title: "FooterMain",
  description: "This describes makemaker on the footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      required: true,
      options: { hotspot: true },
    },
    {
      name: "message",
      title: "Description",
      required: true,
      type: "text",
    },
  ],
};
