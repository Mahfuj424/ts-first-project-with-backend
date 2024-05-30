import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student-route';
import { UserRouters } from './app/modules/user/user-route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFoundRoute';
import router from './app/routes';
// import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'PHero university server is running' });
});


app.use(globalErrorHandler)

// not found route
app.use(notFound)

export default app;
