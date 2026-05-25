import { z } from 'zod';

const SEASONS = ['summer', 'winter', 'spring', 'autumn'] as const;

export const ingredientSchema = z.object({
  name: z.string().min(1),
  ingredientCategory: z.string().min(1),
  seasons: z.array(z.enum(SEASONS)).min(1),
  imageUrl: z.url().optional(),
});
