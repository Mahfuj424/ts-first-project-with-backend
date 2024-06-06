import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFoundRoute';
import router from './app/routes';
// import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  // res.send({ message: 'PHero university server is running' });
  Promise.reject()
};

app.get('/', test);

app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
