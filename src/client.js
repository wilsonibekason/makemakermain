import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  //projectId: process.env.VITE_SANITY_PROJECTID,
  projectId: "zyte9ttg",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  // token: process.env.VITE_SANITY_API_TOKEN,
  token:
    "skwqpZehQfK7HfLgK6iZQiUM9UE74gkQcalffxw8YjU7geCmNj1hH7w3LqJ4O3hgCTceNZPRWwJUpygs6bqjwj8XwKbYIYobHeImLeAnyobW8WKqaB1JcYcLXgHkxOVGR5CHHSuRSQgrRGyowVfKKkR0q2H75eaJ7SCBZaPJd4FF4iTB7bun",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// Makemaker07045185420
