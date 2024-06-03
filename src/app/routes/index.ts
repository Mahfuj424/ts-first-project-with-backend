import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student-route';
import { UserRouters } from '../modules/user/user-route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academic-semester-route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty-route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment-route';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
