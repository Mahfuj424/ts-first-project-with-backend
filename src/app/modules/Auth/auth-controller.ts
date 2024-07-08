import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth-service';
import catchAsync from '../../utils/catchAsync';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.logInUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
