import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    unit: z.number(),
    unitName: z.string(),
    takeaway: z.string(),
  }),
});

const mcq = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/mcq' }),
  schema: z.object({
    topic: z.string(),
    questions: z.array(
      z.object({
        id: z.string(),
        question: z.string(),
        options: z.array(z.string()).length(4),
        answer: z.number().int().min(0).max(3),
        explanation: z.string(),
      }),
    ),
  }),
});

const flashcards = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/flashcards' }),
  schema: z.object({
    topic: z.string(),
    cards: z.array(z.object({ front: z.string(), back: z.string() })),
  }),
});

// Assessment: index.mdx (logistics, rubric, peer review) + one summary page per element
const assessment = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/assessment' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    items: z.string().optional(),
    criterion: z.string().optional(),
  }),
});

// The 7 assessment elements (6 on the poster + marketing & ROI)
const elements = defineCollection({
  loader: file('./src/content/assessment/elements.yaml'),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    onPoster: z.boolean(),
    from: z.string().optional(),
    prompt: z.string().optional(),
    definition: z.string(),
  }),
});

export const collections = { topics, mcq, flashcards, assessment, elements };
