import { UserServices } from './user-service';
import { NextFunction, Request, Response } from 'express';

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next()
  }
};

export const UserController = {
  createStudent,
};
