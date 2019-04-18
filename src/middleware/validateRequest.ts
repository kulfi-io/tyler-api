import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as config from "../config/db.config.json";
import { IDecoded, IApiUser } from "../db/interfaces.js";
import Schema from "../db/validClientSchema";

export class ValidateRequest {
  static validate(req: Request, res: Response, next: NextFunction) {
    const token = (
      (req.body && req.body.access_token) ||
      (req.query && req.query.access_token) ||
      req.headers["x_access_token"]
    )
      .toString()
      .trim();

    const address =
      req.headers && req.headers.forwarded
        ? req.headers.forwarded
        : req.connection.remoteAddress;

    if (!token || !address) {
      return res.status(400).send({ message: "Invalid token or address" });
    } else {
      try {
        const _decoded = <IDecoded>jwt.verify(token, config.secret);
        if (!_decoded) {
          return res.status(400).send({ message: "Decoding error" });
        } else {
          if (_decoded.exp <= Date.now()) {
            return res.status(400).send({ message: "Token Expired" });
          }

          if (address !== _decoded.address) {
            return res.status(400).send({ message: "Unauthorized address" });
          }

          Schema.findById(_decoded.id, (err: Error, data: IApiUser) => {
            if (err) return res.status(400).send(err.message);

            if (data && data.active) {
              return next();
            } else {
              return res.status(417).send({ message: "Inactive token" });
            }
          });

          return;
        }
      } catch (err) {
        return res.status(400).send({ message: err.message });
      }
    }
  }
}

export default new ValidateRequest();
