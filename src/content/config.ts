import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    pubDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
