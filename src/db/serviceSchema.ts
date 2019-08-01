// import { IService } from "./interfaces";
// import dataAccess from "./dataAccess";
// import * as mongoose from "mongoose";

// export class ServiceSchema {
//   id?: mongoose.Types.ObjectId;
//   service?: string;
//   description?: string;
//   shortDescription?: string;
//   active?: boolean;

//   public get schema(): mongoose.Schema {
//     const _schema = new mongoose.Schema(
//       {
//         id: {
//           type: String,
//           required: [true, "is required"],
//           index: true
//         },
//         description: {
//           type: String,
//           required: [true, "is required"]
//         },
//         shortDescription: {
//           type: String,
//           required: [true, "is required"]
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

// const model = dataAccess.dbConnection.model<IService>(
//   "Services",
//   new ServiceSchema().schema
// );
// export default model;
