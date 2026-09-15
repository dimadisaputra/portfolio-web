import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Entry ids are `<lang>/<slug>` — the language comes from the directory, so
 * no `lang` field is needed in frontmatter.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      author: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      category: z.enum(["Data & AI", "Web & App", "Game", "Fun"]),
      tags: z.array(z.string()).optional(),
      repoURL: z.string().url().optional(),
      /** Position on /cv and in the PDF. Unranked projects stay off the CV. */
      cvRank: z.number().optional(),
      /** One-line CV wording; falls back to the face angle. */
      cvSummary: z.string().optional(),

      /** Which side(s) of the site this project belongs on. */
      faces: z.array(z.enum(["de", "se"])).nonempty(),
      /**
       * One sentence of framing per face. Same project, different story —
       * this is what stops the two sites being one portfolio with a filter.
       */
      angle: z.object({ de: z.string(), se: z.string() }).partial().optional(),
    }),
});

export const collections = { projects };
