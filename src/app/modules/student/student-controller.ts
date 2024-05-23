import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student-services';


// get all student request
const getAllStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrivied successfully',
      data: result,
    });
  } catch (err) {
    next()
  }
};

// get single student request
const getSingleStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrivied successfully',
      data: result,
    });
  } catch (err) {
    next()
  }
};

const deleteStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const studentId = req.params.studentId;
    console.log(studentId);
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err) {
    next()
  }
};

const updateStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const studentId = req.params.studentId;
    const studentData = req.body.student;

    // Validate with zod or Joi
    // const validatedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.updateStudentInDB(
      studentId,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: result,
    });
  } catch (err) {
    next()
  }
};

export const StudentControllers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
