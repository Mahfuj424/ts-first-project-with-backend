import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student-route';
import { UserRouters } from '../modules/user/user-route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academic-semester-route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty-route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment-route';
import { FacultyRoutes } from '../modules/faculty/faculty-route';
import { AdminRoutes } from '../modules/Admin/admin-route';
import { CourseRoutes } from '../modules/Course/course-route';
import { semesterRegistrationRoutes } from '../modules/semesterRegisrations/semesterRegistrations-route';

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
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
