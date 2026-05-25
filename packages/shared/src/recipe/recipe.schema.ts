import { z } from 'zod';
import { seasonEnum } from '../common';

const recipeIngredientSchema = z.object({
  ingredientId: z.string().min(1),
  quantity: z.string().min(1),
  unit: z.string().min(1),
});

const recipeStepSchema = z.array(z.string().min(1));

export const recipeSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.url().optional(),
  seasons: z.array(seasonEnum).min(1),
  category: z.string().min(1),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  ingredients: z.array(recipeIngredientSchema).min(1),
  preparationTime: z.number().int().positive(),
  cookingTime: z.number().int().positive(),
  servings: z.number().int().positive(),
  steps: z.array(recipeStepSchema).min(1),
});
