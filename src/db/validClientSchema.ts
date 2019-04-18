import { IValidClient } from "./interfaces";
import dataAccess from "./dataAccess";
import * as configInfo from "../config/db.config.json";
import * as validator from "mongoose-unique-validator";
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";

export class UserTypeSchema {
  id?: string;
  ipAddress?: string;
  name?: string;
  description?: string;
  contactName?: string;
  email?: string;
  phoneNumber?: number;
  token?: string;
  active?: boolean;

  public get schema(): mongoose.Schema {
    const _schema = new mongoose.Schema(
      {
        id: {
          type: String,
          index: true,
          required: [true, "is required"]
        },
        ipAddress: {
          type: String,
          required: [true, "is required"],
          validate: [
            /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            "is invalid"
          ],
          index: true
        },
        name: {
          type: String,
          required: [true, "is required"],
          lowercase: true,
          unique: true
        },
        description: {
          type: String,
          required: [true, "is required"]
        },
        contactName: {
          type: String,
          required: [true, "is required"]
        },
        email: {
          type: String,
          lowercase: true,
          required: [true, "is required"],
          validate: [/\S+@\S+\.\S+/, "is invalid"],
          index: true
        },
        phoneNumber: {
          type: String,
          required: [true, "is required"],
          validate: [
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            "is invalid"
          ],
          index: true
        },
        token: {
          type: String,
          index: true
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

    _schema.methods.generateValidationToken = function() {
      const today = new Date();
      let _exp = new Date(today);
      _exp.setDate(today.getFullYear() + 5);

      try {
        const _token = jwt.sign(
          {
            id: this._id,
            address: this.ipAddress,
            exp: _exp.getTime()
          },
          configInfo.secret
        );

        this.token = _token;

        return _token;
      } catch {
        return null;
      }
    };

    return _schema;
  }
}

const model = dataAccess.dbConnection.model<IValidClient>(
  "ValidClients",
  new UserTypeSchema().schema
);
export default model;
