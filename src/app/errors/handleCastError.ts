import mongoose from 'mongoose';
import { TGenericReturnError } from '../interface/error';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericReturnError => {
  const errorSourse = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSourse,
  };
};
