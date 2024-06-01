import { academicSemesterNameCodeMapper } from './academic-semester-constant';
import { TAcademicSemester } from './academic-semester-interface';
import { AcademicSemester } from './academic-semester-model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

// get all semester into db
const getAllAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

// get single semester into db
const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });

  return result;
};

// update single semester into db
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !==
      payload.code
  ) {
    throw new Error('Invalid Semester code');
  }

  const result = await AcademicSemester.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true },
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
