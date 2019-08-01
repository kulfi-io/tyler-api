// import { IPayment } from "./interfaces";
// import dataAccess from "./dataAccess";
// import * as mongoose from "mongoose";

// export class PaymentSchema {
//   id?: mongoose.Types.ObjectId;
//   scheduleId?: mongoose.Types.ObjectId;
//   squareInfoId?: mongoose.Types.ObjectId;
//   active?: boolean;

//   public get schema(): mongoose.Schema {
//     const _schema = new mongoose.Schema(
//       {
//         id: {
//           type: String,
//           index: true,
//           required: true
//         },
//         scheduleId: {
//           type: mongoose.Schema.Types.ObjectId,
//           index: true,
//           required: [true, "scheduleId is required"]
//         },
//         squareInfoId: {
//           type: mongoose.Schema.Types.ObjectId,
//           index: true,
//           required: [true, "squareInfoId is required"]
//         },
//         active: {
//           type: Boolean,
//           required: [true, "active is required"],
//           default: true,
//           index: true
//         }
//       },
//       { timestamps: true }
//     );

//     return _schema;
//   }
// }

// const model = dataAccess.dbConnection.model<IPayment>(
//   "Payments",
//   new PaymentSchema().schema
// );
// export default model;
