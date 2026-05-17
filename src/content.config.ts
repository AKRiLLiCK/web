import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const archiveCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/archive" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    docType: z.enum(['Book', 'Paper', 'Essay', 'Manual', 'Devlog']),
    description: z.string(),
    coverImage: image(),
    isbn: z.string().optional(),
    downloadUrl: z.string().optional(),
  }),
});

const coursesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    layout: z.string(),
    bannerImage: image().optional(),
  }),
});

export const collections = {
  'archive': archiveCollection,
  'courses': coursesCollection,
};

