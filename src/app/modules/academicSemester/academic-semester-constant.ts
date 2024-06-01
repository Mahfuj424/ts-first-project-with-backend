import { TAcademicSemestercode, TAcademicSemesterName, TMonths } from "./academic-semester-interface";

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const AcademicSemesterCode: TAcademicSemestercode[] = ['01', '02', '03'];

type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};

export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};