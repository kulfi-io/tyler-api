import { IUserType } from "./interfaces";
import dataAccess from "./dataAccess";
import * as validator from "mongoose-unique-validator";
import * as mongoose from "mongoose";

export class UserTypeSchema {
  id?: string;
  display?: string;
  description?: string;
  active?: boolean;

  public get schema(): mongoose.Schema {
    const _schema = new mongoose.Schema(
      {
        id: {
          type: String,
          index: true,
          required: [true, "is required"]
        },
        display: {
          type: String,
          required: [true, "is required"],
          lowercase: true,
          unique: true
        },
        description: {
          type: String,
          required: [true, "is required"]
        },
        active: {
          type: Boolean,
          retuired: true,
          required: [true, "is required"]
        }
      },
      { timestamps: true }
    );

    _schema.plugin(validator, { message: "is already taken" });

    return _schema;
  }
}

const model = dataAccess.dbConnection.model<IUserType>(
  "UserTypes",
  new UserTypeSchema().schema
);
export default model;
