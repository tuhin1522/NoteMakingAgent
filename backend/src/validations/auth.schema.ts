import { z } from 'zod';

export const registerUserSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        email: z.string().min(1, "Email cannot be empty"),
        password: z.string().min(8, "Password must be at least 8 characters long"),
    })
    .strict();

export const loginUserSchema = z
  .object({
    email: z.email().min(1, "email cannot be empty").trim().toLowerCase(),
    password: z.string().min(1, "password cannot be empty"),
  })
  .strict();

export type RegisterInput = z.infer<typeof registerUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;