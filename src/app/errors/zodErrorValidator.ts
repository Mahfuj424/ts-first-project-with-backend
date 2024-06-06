import { ZodError } from 'zod';
import { TErrorSourse, TGenericReturnError } from '../interface/error';

export const handleZodError = (err: ZodError):TGenericReturnError => {
  const errorSourse:TErrorSourse = err.issues.map((issuse) => {
    return {
      path: issuse?.path[issuse.path.length - 1],
      message: issuse.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSourse,
  };
};
