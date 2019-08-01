import {Schema, model, Document, Model } from 'mongoose';
import * as validator from "mongoose-unique-validator";

declare interface IUserTypeSchema extends Document {
  id: string;
  display: string;
  description: string;
  active: boolean;
}

export interface IUserTypeModel extends Model<IUserTypeSchema>{}

export class UserTypeSchema {
  private _model: Model<IUserTypeSchema>

  constructor() {
      const schema = new Schema({
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

      schema.plugin(validator, { message: "is already taken" });

      this._model = model<IUserTypeSchema>('UserTypes', schema);
  }

  public get model(): Model<IUserTypeSchema> {
      return this._model
  }
}