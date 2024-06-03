import { Student } from './student-model';
import { TStudent } from './student-interface';

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
  const result = await Student.findById(id)
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
  const result = await Student.deleteOne({ _id: id }, { isDeleted: true });
  return result;
};

const updateStudentInDB = async (id: string, studentData: TStudent) => {
  const result = await Student.findOneAndUpdate({ id }, studentData, {
    new: true,
  });
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentInDB,
};
