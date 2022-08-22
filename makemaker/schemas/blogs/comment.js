export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    // {
    //   name: "postedBy",
    //   title: "Posted By",
    //   type: "postedBY",
    // },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of personm who commented on blog",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "review",
      title: "Message",
      type: "text",
    },
  ],
};
