import { z } from 'zod';

export const SEASONS = ['summer', 'winter', 'spring', 'autumn'] as const;
export const seasonEnum = z.enum(SEASONS);
export type Season = z.infer<typeof seasonEnum>;
