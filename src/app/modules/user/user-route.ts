import express from 'express';
import { UserController } from './user-controller';
import { studentValidations } from '../student/student-validation';
import validateRequest from '../../middleware/validateRequest';
import { createFacultyValidationSchema } from '../faculty/faculty-validation';
import { createAdminValidationSchema } from '../Admin/admin-validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserController.createFaculty,
);


router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);

export const UserRouters = router;
