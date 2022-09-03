export default {
  name: "galleryImages",
  title: "GalleryImages",
  descrption: "This is the gellery images, where you post your images",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
