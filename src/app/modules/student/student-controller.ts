import { Request, Response } from 'express';
import { StudentServices } from './student-services';
import studentValidationSchema from './student-validation';
// import { studentValidationSchema } from './student-joi-validation';

// create a student request
const createStudent = async (req: Request, res: Response) => {
  try {
    // student validation with joi
    // const { error, value } = studentValidationSchema.validate(student);

    // if (!error) {
    //   const result = await StudentServices.createStudentIntoDB(value);

    //   res.status(200).json({
    //     success: true,
    //     message: 'Student is created successfully',
    //     data: result,
    //   });
    // }

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    // }

    // student validation with zod

    const student = req.body.student;
    const zodParseData = studentValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: err.message || 'Somthing went wrong',
      error: err,
    });
  }
};

// get all student request
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrivied successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Somthing went wrong',
      error: err,
    });
  }
};

// get single student request
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrivied successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Somthing went wrong',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    console.log(studentId);
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Somthing went wrong',
      error: err,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const studentData = req.body.student;

    // Validate with zod or Joi
    const validatedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.updateStudentInDB(
      studentId,
      validatedData,
    );

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
