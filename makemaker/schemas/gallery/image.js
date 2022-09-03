export default {
  name: "galleryImages",
  title: "GalleryImages",
  descrption: "This is the gellery images, where you post your images",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
