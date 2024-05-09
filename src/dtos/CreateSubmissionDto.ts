import { z } from "zod";

export type CreateSubmissionDto = z.infer<typeof createSubmissionZodSchema>;

export const createSubmissionZodSchema = z.object({
    userId: z.string(),
    problemID: z.string(),
    code: z.string(),
    language: z.string()
}).strict();