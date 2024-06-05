import { Student } from './student-model';
import { TStudent } from './student-interface';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user-model';

// get all student from db
const getAllStudentFromDB = async () => {
  const result = await Student.find()
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

// get single student from db
const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.find({ id });
  const result = await Student.findOne({ id })
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

// delete single doc from db
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deleteStudent = await Student.findOneAndUpdate(
      { id: id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed To delete student');
    }

    const deleteUser = await User.findOneAndUpdate(
      { id: id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Delete user');
    }

    session.commitTransaction();
    session.endSession();

    return deleteStudent;
  } catch (err) {
    session.abortTransaction();
    session.endSession();
    throw new Error('failed to create Student');
  }
};

const updateStudentInDB = async (
  id: string,
  studentData: Partial<TStudent>,
) => {
  
  const { name, guardian, localGuardian, ...remainingStudentData } =
    studentData;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };


  /**
   * premitive data update
   * contactNo = "00000"
   *
   * but not premitive data
   * name.firstName = ""
   */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }
  console.log("modifiend data",modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentInDB,
};
