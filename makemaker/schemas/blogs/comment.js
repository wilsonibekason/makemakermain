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
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "comment won't show on the application until approved",
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
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
  // Annotations can be any object structure – e.g. a link or a footnote.
  // configuring prepare function
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
};
