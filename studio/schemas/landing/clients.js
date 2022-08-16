export default {
  name: "clients",
  title: "Our Clients",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Logo Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
