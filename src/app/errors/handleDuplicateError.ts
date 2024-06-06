/* eslint-disable @typescript-eslint/no-explicit-any */

import { TErrorSourse, TGenericReturnError } from '../interface/error';

export const handleDuplicateError = (err: any): TGenericReturnError => {
  const match = err.message.match(/"([^"]*)"/);

  const exstractedMessage = match && match[1];

  const errorSourse: TErrorSourse = [
    {
      path: '',
      message: `${exstractedMessage} is already exists!`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSourse,
  };
};
