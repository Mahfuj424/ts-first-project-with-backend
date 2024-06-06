import { Router } from 'express';
import { AcademicDepartmentControllers } from './academicDepartment-controller';
// import validateRequest from '../../middleware/validateRequest';
// import { AcademicDepartmentValidations } from './academicDepartment-validation';

const router = Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);
router.patch(
  '/:departmentId',
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
