// import { ISchedule } from "./interfaces";
// import dataAccess from "./dataAccess";
// import * as mongoose from "mongoose";

// export class ScheduleSchema {
//   id?: mongoose.Types.ObjectId;
//   userId?: mongoose.Types.ObjectId;
//   serviceId?: mongoose.Types.ObjectId;
//   durationId?: mongoose.Types.ObjectId;
//   appointment?: Date;
//   active?: boolean;

//   public get schema(): mongoose.Schema {
//     const _schema = new mongoose.Schema(
//       {
//         id: {
//           type: String,
//           required: [true, "is required"],
//           index: true
//         },
//         userId: {
//           type: mongoose.Schema.Types.ObjectId,
//           required: [true, "is required"],
//           index: true
//         },
//         serviceId: {
//           type: mongoose.Schema.Types.ObjectId,
//           required: [true, "is required"],
//           index: true
//         },
//         durationId: {
//           type: mongoose.Schema.Types.ObjectId,
//           required: [true, "is required"],
//           index: true
//         },
//         appointment: {
//           type: Date,
//           required: [true, "is required"],
//           match: { $get: +new Date() }
//         },
//         active: {
//           type: Boolean,
//           required: [true, "is required"],
//           default: true,
//           index: true
//         }
//       },
//       { timestamps: true }
//     );

//     return _schema;
//   }
// }

// const model = dataAccess.dbConnection.model<ISchedule>(
//   "Schedules",
//   new ScheduleSchema().schema
// );
// export default model;
