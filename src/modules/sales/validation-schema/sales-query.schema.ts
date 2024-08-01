import { z } from 'zod';

export const salesQuerySchema = z.object({
  start: z.string().optional(),
  end: z.string().optional(),
});
