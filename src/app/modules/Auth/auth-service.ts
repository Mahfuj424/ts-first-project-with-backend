import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser } from './auth-interface';
import { User } from '../user/user-model';
import jwt from 'jsonwebtoken';
import config from '../../config';

const logInUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload.id)
  console.log(user)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  // checking if the user is blocked

  const userStatus = user?.status;

  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
  }

  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched !');
  }

  const jwtPayload = {
    userId: user,
    role: user.role
  };

  const accessToken = jwt.sign(
    jwtPayload,
    config.jwt_access_screet as string,
    { expiresIn: "10d" },
  );
  return {
    accessToken,
    needsPasswordChange: user.needsPasswordChange
  };
};

export const AuthServices = {
  logInUser,
};
