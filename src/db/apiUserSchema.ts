import { IApiUser } from "./interfaces";
import dataAccess from "./dataAccess";
import * as configInfo from "../config/db.config.json";
import * as mongoose from "mongoose";
import * as validator from "mongoose-unique-validator";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

export class ApiUserSchema {
  salt?: string;
  password_hash?: string;
  id?: mongoose.Types.ObjectId;
  username?: string;
  email?: string;
  firstName?: string;
  userTypeId?: mongoose.Types.ObjectId;
  lastName?: string;
  active?: boolean;
  emailValidated?: boolean;

  public get schema(): mongoose.Schema {
    const _schema = new mongoose.Schema(
      {
        id: {
          type: String,
          index: true,
          required: [true, "is required"]
        },
        username: {
          type: String,
          lowercase: true,
          required: [true, "is required"],
          match: [/[a-zA-Z0-9-_]{5,20}\w+/, "is invalid"],
          unique: true,
          index: true
        },
        email: {
          type: String,
          lowercase: true,
          required: [true, "is required"],
          match: [/\S+@\S+\.\S+/, "is invalid"],
          unique: true,
          index: true
        },
        firstName: {
          type: String,
          required: [true, "is required"],
          index: true
        },
        lastName: {
          type: String,
          required: [true, "is required"],
          index: true
        },
        salt: {
          type: String
        },
        password_hash: {
          type: String,
          index: true
        },
        userTypeId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          index: true,
          ref: 'UserTypes',
        },
        active: {
          type: Boolean,
          default: true
        },
        tokenValidated: {
          type: Boolean,
          default: false
        },
        validationToken: {
          type: String,
          index: true
        }
      },
      { timestamps: true }
    );

    _schema.plugin(validator, { message: "is already taken" });

    _schema.methods.matchPasswordCriteria = function(
      password: string
    ): RegExpMatchArray | null {
      return password.match(configInfo.passwordMatchCriteria);
    };

    _schema.methods.expiresIn = (days: number): number => {
      const _date = new Date();
      return _date.setDate(_date.getDate() + days);
    };

    _schema.methods.setPassword = function(password: string): boolean {
      if (_schema.methods.matchPasswordCriteria(password)) {
        
        this.salt = crypto.randomBytes(16).toString("hex");
        
        const hash = crypto.createHmac('sha512', this.salt);
        hash.update(password);
        var hashValue = hash.digest('hex');

        if(!hashValue) return false;

        this.password_hash = hashValue;

        return true;
      } else {
        console.error("password", "does not match criteria");
        return false;
      }
    };

    _schema.methods.generateValidationToken = function() {
      const _expires = _schema.methods.expiresIn(1);

      try {
        const _token = jwt.sign(
          {
            username: this.username,
            exp: _expires
          },
          configInfo.secret
        );

        this.tokenValidated = false;
        this.validationToken = _token;

        return _token;
      } catch {
        return null;
      }
    };

    _schema.methods.validPassword = function(password: string): boolean {
      if (!password) return false;
      const hash = crypto.createHmac('sha512', this.salt);
      hash.update(password);
      var hashValue = hash.digest('hex');
      return this.password_hash === hashValue;
    };

    return _schema;
  }
}

const model = dataAccess.dbConnection.model<IApiUser>(
  "apiUsers",
  new ApiUserSchema().schema
);
export default model;
