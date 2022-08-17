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
      name: "message",
      title: "Message",
      type: "text",
    },
  ],
};
