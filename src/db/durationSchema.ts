import { IDuration } from "./interfaces";
import dataAccess from "./dataAccess";
import * as validator from "mongoose-unique-validator";
import * as mongoose from "mongoose";

export class DurationSchema {
  id?: string;
  display?: string;
  price?: number;
  active?: boolean;

  public get schema(): mongoose.Schema {
    const _schema = new mongoose.Schema(
      {
        id: {
          type: String,
          required: [true, "is required"],
          index: true
        },
        display: {
          type: String,
          require: [true, "is required"],
          unique: true,
          lowercase: true
        },
        price: {
          type: Number,
          require: [true, "is required"],
          unique: true
        },
        active: {
          type: Boolean,
          required: [true, "is required"],
          default: true
        }
      },
      { timestamps: true }
    );

    _schema.plugin(validator, { message: "is already taken" });

    return _schema;
  }
}

const model = dataAccess.dbConnection.model<IDuration>(
  "Duration",
  new DurationSchema().schema
);
export default model;
