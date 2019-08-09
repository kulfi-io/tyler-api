import * as config from '../config/config.json';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as validator from 'mongoose-unique-validator';
import {
  Document,
  model,
  Model,
  Schema,
  Types
} from 'mongoose';

declare interface IUserSchema extends Document {
  salt: string;
  password_hash: string;
  id: Types.ObjectId;
  username: string;
  email: string;
  firstName: string;
  userTypeId: Types.ObjectId;
  lastName: string;
  active: boolean;
  tokenValidated: boolean;
  validationToken: string;

  matchPasswordCriteria(password: string): RegExpMatchArray | null;
  expiredIn(days: number): number;
  generateValidationToken(username: string, id: string): string | null;
  validPassword(password: string, stored: string, salt: string): boolean;
  generateSalt(): string;
  generatePasswordHash(password: string, salt: string): string;

}

export interface IUserModel extends Model<IUserSchema> { }

export class UserSchema {
  private _model: Model<IUserSchema>

  constructor() {
    const schema = new Schema(
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
          match: [/[a-zA-Z0-9-_]{5,20}\w+/, "needs to be 6 to 20 alpha-numeric characters. allowable chareacters(-_)"],
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
          type: Types.ObjectId,
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

    schema.plugin(validator, { message: ':taken' });

    schema.methods.matchPasswordCriteria = (
      password: string
    ): RegExpMatchArray | null => {
      return password.match(config.account.passwordMatchCriteria);
    };

    schema.methods.expiresIn = (days: number): number => {
      const _date = new Date();
      return _date.setDate(_date.getDate() + days);
    };

    schema.methods.generateSalt = (): string => {
      return crypto.randomBytes(16).toString("hex");
    }

    schema.methods.generatePasswordHash = (password: string, salt: string): string => {

      const hash = crypto.createHmac('sha512', salt);
      hash.update(password);
      return hash.digest('hex');

    }

    schema.methods.generateValidationToken = (username: string, id: string): string | null => {
      const _expires = schema.methods.expiresIn(config.account.verifyTokenExpiresIn);

      try {
        const _token = jwt.sign(
          {
            username: username,
            id: id,
            exp: _expires
          },
          config.secret
        );

        return _token;
      } catch {
        return null;
      }
    };

    schema.methods.validPassword = (password: string, stored: string, salt: string): boolean => {
      if (!password) return false;
      const hash = crypto.createHmac('sha512', salt);
      hash.update(password);
      var hashValue = hash.digest('hex');
      return stored === hashValue;
    };

    this._model = model<IUserSchema>('ApiUsers', schema);
  }

  public get model(): Model<IUserSchema> {
    return this._model
  }
}