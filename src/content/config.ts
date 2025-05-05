import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

// define blog collection schema
const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: image(),
      alt: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

// define work collection schema
const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      completionDate: z.date().optional(),
      updatedDate: z.date().optional(),
      heroImage: image(),
      client: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      link: z.string().url().optional(),
      github: z.string().url().optional(),
    }),
});

export const collections = { blog, work };
