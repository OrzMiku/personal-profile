import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const dataCollection = defineCollection({
  type: "data",
});

export const collections = {
  posts: blogCollection,
  data: dataCollection,
};
