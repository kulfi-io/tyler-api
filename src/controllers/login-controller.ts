import * as jwt from 'jsonwebtoken';
import { BaseController } from './base-controller';
import { IDecoded } from '../models/model-interfaces';
import { IUserModel } from '../db/user-schema';
import { Request, Response } from 'express';
import { USER } from '../db/db-enums';
import { VERIFY } from '../middleware/verify-enums';

export class loginController extends BaseController {
  private model: IUserModel;

  constructor() {
    super()
    this.model = this.DB.Models.User;
  }

  login = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _username = this.decryptData(req.body.username);
    const _password = this.decryptData(req.body.password);

    this.model.findOne({ username: _username }).exec(
      (err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });

        if (data) {

          if (!data.validPassword(_password, data.password_hash, data.salt)) {
            return res
              .status(400)
              .send({ message: USER.NAME_PASSWORD_MISMATCH });
          }

          if (!data.tokenValidated) {
            return res
              .status(301)
              .send({ message: USER.TOKEN_VALIDATION_NEEDED });
          }

          return res.status(200).send({ message: `Welcome back ${data.firstName}` });
        }

        return res.status(400).send({ message: USER.INVALID_USER });
      }
    );

  };

  // resetPassword = (req: Request, res: Response) => {
  //   try {
  //     if (!req.body.username || !req.body.password) {
  //       return res.status(400).send();
  //     }

  //     this.model.findOne({ username: req.body.user }).exec(
  //       (err: Error, data) => {
  //         if (err) return res.status(400).send({ message: err.message });

  //         if (data) {

  //           if (!data.setPassword(req.body.password)) {
  //             return res
  //               .status(400)
  //               .send("either username or password in incorrect!");
  //           } else {
  //             Schema.findByIdAndUpdate(
  //               data._id,
  //               { salt: data.salt, password_hash: data.password_hash },
  //               (err: Error) => {
  //                 if (err)
  //                   return res.status(400).send({ message: err.message });
  //                 return res.status(200).send();
  //               }
  //             );
  //           }
  //         }

  //         return res.status(417).send();
  //       }
  //     );

  //   } catch (err) {
  //     return res.status(400).send({ message: err.message });
  //   }
  // };

  verifyUser = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password || !req.params.token) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _token = req.body.token;
    const _username = this.decryptData(req.body.username);
    const _password = this.decryptData(req.body.password)

    const _decoded = <IDecoded>(
      jwt.verify(_token, this.secret)
    );

    if(!_decoded)
      return res.status(400).send({ message: VERIFY.DECODING_ERROR });
    
    if (_decoded.exp > Date.now() / 1000) {
      this.model.findByIdAndUpdate(
        _decoded.id,
        { tokenValidated: true },
        (err: Error, result) => {
          if (err) return res.status(400).send(err.message);

          if (result) {
            if (result.username === _username
              && result.validPassword(_password, result.password_hash, result.salt)) {
              return res.status(200).send({ message: USER.VALIDATED_TOKEN });
            }
          }
          return res.status(400).send({ message: USER.NAME_PASSWORD_TOKEN_MISMATCH });
        }
      );
    }

    return res.status(401).send({ message: VERIFY.TOKEN_EXPIRED });
  
  };
}

export default new loginController();
