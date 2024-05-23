import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student-route';
import { UserRouters } from './app/modules/user/user-route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRouters);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'PHero university server is running' });
});

app.use(globalErrorHandler);

export default app;
