import * as mongoose from "mongoose";

export interface IService extends mongoose.Document {
  id: string;
  description: string;
  shortDescription: string;
  active: boolean;
}

export interface IDuration extends mongoose.Document {
  id: string;
  display: string;
  price: number;
  active: boolean;
}

export interface ISchedule extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
  durationId: mongoose.Types.ObjectId;
  appointment: Date;
  active: boolean;
}

export interface ISquareInfo extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  squareCustomerId: string;
  active: boolean;
}

export interface IPayment extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  scheduleId: mongoose.Types.ObjectId;
  squareInfoId: mongoose.Types.ObjectId;
  active: boolean;
}

export interface IReview extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  review: string;
  rating: number;
  active: boolean;
}

// export interface IValidClient extends mongoose.Document {
//   id: string;
//   ipAddress: string;
//   name: string;
//   description: string;
//   contactName: string;
//   email: string;
//   phoneNumber: number;
//   token: string;
//   active: boolean;

//   generateValidationToken(): string;
// }
