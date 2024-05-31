import express from 'express';
import { AcademicSemesterControllers } from './academic-semester-controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academic-semester-validation';

const router = express.Router();

// will call controller func

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
