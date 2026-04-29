import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vertical = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vertical' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    description: z.string(),
    systems: z.array(z.string()),
    molecules: z.array(z.string()),
    sensationTags: z.array(z.string()),
    series: z.string().optional(),
  }),
});

export const collections = { vertical };
