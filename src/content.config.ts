import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    sticky: z.boolean().default(false),
  }),
});

const moments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/moments' }),
  schema: z.object({
    date: z.coerce.date(),
    sticky: z.boolean().default(false),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    description: z.string().optional().default(''),
  }),
});

const donations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/donations' }),
  schema: z.object({
    name: z.string(),
    amount: z.string(),
    message: z.string().optional().default(''),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, moments, links, donations };
