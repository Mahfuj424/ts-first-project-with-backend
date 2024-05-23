import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .min(6, { message: "password can't be less then 6 characters" })
    .max(20, { message: "password can't be more then 20 characters" })
    .optional(),
});

export const UserValidation = { userValidationSchema };
