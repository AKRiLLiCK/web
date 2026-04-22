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

export const collections = {
  'archive': archiveCollection,
};
