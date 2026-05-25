import { z } from 'zod';
import { SEASONS } from '../common/season.schema';

export const ingredientSchema = z.object({
  name: z.string().min(1),
  ingredientCategory: z.string().min(1),
  seasons: z.array(z.enum(SEASONS)).min(1),
  imageUrl: z.url().optional(),
});
