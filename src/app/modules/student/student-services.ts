import { StudentModel } from '../student-model';
import { Student } from './student-interface';

// post a student into db
const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student); built in static mathod

  // built in instance mathod
  const student = new StudentModel(studentData);
  const result = await student.save();

  return result;
};

// get all student from db
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get single student from db
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.find({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
