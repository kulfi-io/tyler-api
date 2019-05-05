import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as configInfo from "../config/db.config.json";
import Schema from "../db/apiUserSchema";
import { IApiUser, IDecoded } from "../db/interfaces";
import { BaseController } from "./baseController";


export class loginController extends BaseController{
  private username:string;
  private password:string;
  private token:string;

  constructor() {
    super()
    this.username='';
    this.password='';
    this.token='';
  }

  login = (req: Request, res: Response) => {
    
    try {

      if (!req.body.username || !req.body.password) {
        return res.status(400).send();
      }

      this.username = this.decryptData(req.body.username);
      this.password = this.decryptData(req.body.password);

      Schema.findOne({ username: this.username }).exec(
        (err: Error, data: IApiUser) => {
          if (err) return res.status(400).send({ message: err.message });

          if (data) {
            if (!data.validPassword(this.password)) {
              return res
                .status(400)
                .send({ message: "either username or password in incorrect!" });
            }

            if (!data.tokenValidated) {
              return res
                .status(301)
                .send({ message: "please validate your email" });
            }

            return res.status(200).send({ message: "Welcome back!" });
          }

          return res.status(400).send({ message: "user does not exist" });
        }
      );

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  resetPassword = (req: Request, res: Response) => {
    try {
      if (!req.body.username || !req.body.password) {
        return res.status(400).send();
      }

      Schema.findOne({ username: req.body.user }).exec(
        (err: Error, data: IApiUser) => {
          if (err) return res.status(400).send({ message: err.message });

          if (data) {
            if (!data.setPassword(req.body.password)) {
              return res
                .status(400)
                .send("either username or password in incorrect!");
            } else {
              Schema.findByIdAndUpdate(
                data._id,
                { salt: data.salt, password_hash: data.password_hash },
                (err: Error) => {
                  if (err)
                    return res.status(400).send({ message: err.message });
                  return res.status(200).send();
                }
              );
            }
          }

          return res.status(417).send();
        }
      );

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  validateEmailToken = (req: Request, res: Response) => {
    try {
      if (!req.body.username || !req.body.password || !req.params.token) {
        return res.status(400).send();
      }

      this.token = this.decryptData(req.body.token);
      this.username = this.decryptData(req.body.username);
      this.password = this.decryptData(req.body.password)

      const _decoded = <IDecoded>(
        jwt.verify(this.token, configInfo.secret)
      );

      if (!_decoded) {
        return res.status(400).send({ message: "decoding failure" });
      } else {
        if (_decoded.exp > Date.now() / 1000) {
          Schema.findByIdAndUpdate(
            _decoded.id,
            { tokenValidated: true },
            (err: Error, result: IApiUser | null ) => {
              if (err) return res.status(400).send(err.message);

              if(result) {
                if(result.username === this.username
                  && result.validPassword(this.password)){
                    return res.status(200).send('thank you for verifying you id');
                  }
              }
              return res.status(400).send('either username, password or token in incorrect!');
            }
          );
        }

        return res.status(401).send({ message: "Token expired" });
      }
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };
}

export default new loginController();
