import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		dek: z.string(),
		date: z.coerce.date(),
		readTime: z.string(),
		wordCount: z.number().optional(),
		tags: z.array(z.string()),
		type: z.enum(['essay', 'notes']).default('notes'),
		featured: z.boolean().default(false),
	}),
});

export const collections = { writing };
