export default {
  name: "footerLink",
  title: "FooterLink",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "name",
          title: "Link name",
          type: "string",
        },

        {
          name: "link",
          type: "string",
        },
      ],
    },
    {
      name: "desc",
      title: "CompanyDescription",
      type: "text",
      description: "This is the description of the company",
    },
  ],
};
