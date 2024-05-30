import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student-route';
import { UserRouters } from '../modules/user/user-route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
