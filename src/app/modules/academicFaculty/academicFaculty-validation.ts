import { z } from 'zod';

const createAcademicFacultyValidaionSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const updateAcademicFacultyValidaionSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const AcademicFacultyValidations = {
  createAcademicFacultyValidaionSchema,
  updateAcademicFacultyValidaionSchema,
};
