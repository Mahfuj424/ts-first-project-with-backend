import { Router } from 'express';
import { AcademicFacultyControllers } from './academicFaculty-controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidations } from './academicFaculty-validation';

const router = Router();

router.post(
  '/create-academic-faculty',
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);
router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidaionSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
