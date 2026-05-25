import { z } from 'zod';
import { seasonEnum } from '../common';

export const recipeIngredientSchema = z.object({
  ingredientId: z.string().min(1),
  quantity: z.string().min(1),
  unit: z.string().min(1),
});

export const recipeSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.url().optional(),
  seasons: z.array(seasonEnum).min(1),
  category: z.string().min(1),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  ingredients: z.array(recipeIngredientSchema).min(1),
  preparationTime: z.number().int().positive(),
  cookingTime: z.number().int().positive(),
  servings: z.number().int().positive(),
  steps: z.array(z.string().min(1)).min(1),
});
