export default {
  name: "reviews",
  title: "Reviews",
  description: "This for the customer reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "text",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "textarea",
      maxLength: 40,
      minLength: 20,
    },
  ],
};
