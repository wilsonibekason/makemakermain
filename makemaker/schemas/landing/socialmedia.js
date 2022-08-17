export default {
  name: "socialMedia",
  title: "SocialMedia",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "socialIcon",
      type: "image",
      options: { hotspot: true },
      required: true,
    },
    {
      name: "link",
      title: "socialLink",
      type: "string",
      required: true,
    },
  ],
};
