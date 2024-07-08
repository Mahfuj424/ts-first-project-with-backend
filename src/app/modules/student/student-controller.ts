/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student-services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { Student } from './student-model';

// get all student request
const getAllStudent = catchAsync(async (req, res, next) => {

  const result = await StudentServices.getAllStudentFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are Retrived successfully',
    data: result,
  });
});

// get single student request
const getSingleStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrive single student successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;

  const result = await StudentServices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  const studentData = req.body.student;


  const result = await StudentServices.updateStudentInDB(
    studentId,
    studentData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Updated successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
