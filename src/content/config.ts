import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      author: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      canonicalURL: z.string().url().optional(),
      draft: z.boolean().default(false),

      image: image(),
      imageAlt: z.string(),

      category: z.enum(["Data & AI", "Web & App", "Game", "Fun"]),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
