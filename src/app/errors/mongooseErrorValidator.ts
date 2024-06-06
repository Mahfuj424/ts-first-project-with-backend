import mongoose from 'mongoose';
import { TErrorSourse, TGenericReturnError } from '../interface/error';

export const handleMongooseError = (
  err: mongoose.Error.ValidationError,
): TGenericReturnError => {
  const errorSourse: TErrorSourse = Object.values(err?.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSourse,
  };
};
