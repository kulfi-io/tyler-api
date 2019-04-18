import { IReview } from "./interfaces";
import dataAccess from "./dataAccess";
import * as mongoose from "mongoose";

export class ReviewSchema {
  id?: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId;
  review?: string;
  rating?: number;
  active?: boolean;

  public get schema(): mongoose.Schema {
    const _schema = new mongoose.Schema(
      {
        id: {
          type: String,
          required: [true, "is required"],
          index: true
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          index: true,
          required: [true, "is required"]
        },
        review: {
          type: String,
          required: [true, "is required"]
        },
        rating: {
          type: Number,
          required: [true, "is required"],
          index: true
        },
        active: {
          type: Boolean,
          required: [true, "active is required"],
          default: true,
          index: true
        }
      },
      { timestamps: true }
    );

    return _schema;
  }
}

const model = dataAccess.dbConnection.model<IReview>(
  "Reviews",
  new ReviewSchema().schema
);
export default model;
