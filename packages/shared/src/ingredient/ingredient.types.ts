import type { z } from 'zod';
import type { ingredientSchema } from './ingredient.schema';

export type Ingredient = z.infer<typeof ingredientSchema>;
