import { Schema, model } from 'mongoose';

import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUserName,
} from './student-interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    user:{
     type: Schema.Types.ObjectId,
     required:[true, 'user id is required'],
     unique:true,
     ref:"User"
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddres: {
      type: String,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuradianSchema,
      required: true,
    },
    profileImg: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtually add data
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// pre middleware


// Query middleware
// studentSchema.pre('find', async function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// studentSchema.pre('findOne', async function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// // query with aggregate
// studentSchema.pre('aggregate', async function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// creating a custom mathods
// studentSchema.methods.isUserExists = async function (id:string){
//   const existsUser = Student.findOne({id});
//   return existsUser;
// }

// creating a custom static
studentSchema.statics.isUserExists = async function (id: string) {
  const existsUser = Student.findOne({ id });
  return existsUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
