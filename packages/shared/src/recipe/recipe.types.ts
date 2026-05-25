import type { z } from 'zod';
import type { recipeIngredientSchema, recipeSchema } from './recipe.schema';

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipeIngredient = z.infer<typeof recipeIngredientSchema>;
