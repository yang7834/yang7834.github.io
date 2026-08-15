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
    avatar: z.string().optional(),
    description: z.string().optional().default(''),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string().optional().default(''),
    date: z.coerce.date().optional(),
  }),
});

const anime = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/anime' }),
  schema: z.object({
    title: z.string(),
    status: z.string().default('想看'),
    description: z.string().optional().default(''),
  }),
});

const bookmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookmarks' }),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    description: z.string().optional().default(''),
  }),
});

export const collections = { blog, moments, links, photos, anime, bookmarks };
