import { TAcademicDepartment } from './academicDepartment-interface';
import { AcademicDepartment } from './academicDepartment-model';

const createAcademicDepartmentIntoDB = async (paylaod: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(paylaod);
  return result;
};

const getAllAcademicDepartmentIntoDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentIntoDB = async (payload: string) => {
  const result = await AcademicDepartment.findOne({ _id: payload }).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
};
