import * as jwt from 'jsonwebtoken';
import { BaseController } from './base-controller';
import { IDecoded, ILogin, IValidate, IUserReset, IResetAccount } from '../models/model-interfaces';
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

    const _login: ILogin = {
      username: this.decryptIV(req.body.username),
      password: this.decryptIV(req.body.password)
    }

    this.model.findOne({ username: _login.username }).exec(
      (err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });

        if (data) {

          if (!data.validPassword(_login.password, data.password_hash, data.salt)) {
            return res
              .status(400)
              .send({ message: USER.NAME_PASSWORD_MISMATCH });
          }

          if (!data.tokenValidated) {
            return res
              .status(401)
              .send({ message: USER.TOKEN_VALIDATION_NEEDED });
          }

          return res.status(200).send({ message: `Welcome back ${data.firstName}` });
        }

        return res.status(400).send({ message: USER.INVALID_USER });
      }
    );

  };

  resetPasswordRequest = (req: Request, res: Response) => {

      if(!req.body.email) {
        return res.status(400).send({message: USER.MISSING_REQUIRED_ITEMS});
      }

      const _resetAccount: IResetAccount = {
        email: this.decryptIV(req.body.email)
      }

      this.model.findOne({email: _resetAccount.email}).exec(
        (err: Error, data) => {

          if(err) return res.status(400).send({message: err.message});
          
          if(data) {
            data.tokenValidated = false;
            const _token = data.generateValidationToken(data.username, data._id);
  
            if(!_token)
              res.status(400).send({message: USER.TOKEN_GENERATION_ERROR});
            else
              data.validationToken = _token;
  
            this.model.findByIdAndUpdate(data._id, {tokenValidated: data.tokenValidated, validationToken: data.validationToken}
              ,(err: Error, data) => {
  
                if(err) return res.status(400).send({message: err.message});
  
                if(data) {
  
                  const _user: IUserReset = {
                    username: this.encryptIV(data.username),
                    email: this.encryptIV(data.email),
                    firstname: this.encryptIV(data.firstName),
                    lastname: this.encryptIV(data.lastName),
                    token: data.validationToken
                  }; 
                
                  return res.status(200).send({message: _user});
                }
            });

          } else {
            return res.status(401).send({message: USER.INVALID_USER});
          }

      });
  }
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

  private removeLineBreakEmailToken = (token: string): string => {
    if (token) {
      // remove new line identifier from token
      // added in rendered email
      // idedentified is an {=} character
      return token.replace(/\=/g, '');
    }

    return token;

  }
  verifyUser = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password || !req.body.token) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _validate: IValidate = {
      token: this.removeLineBreakEmailToken(req.body.token),
      username: this.decryptIV(req.body.username),
      password: this.decryptIV(req.body.password)
    }

    let _decoded;

    try {
      _decoded = <IDecoded>(
        jwt.verify(_validate.token, this.secret)
      );
    }
    catch {
    }


    if (!_decoded)
      return res.status(400).send({ message: VERIFY.DECODING_ERROR });

    if (_decoded.exp > Date.now() / 1000) {

      this.model.findByIdAndUpdate(
        _decoded.id,
        { tokenValidated: true },
        (err: Error, result) => {
          if (err) return res.status(400).send(err.message);

          if (result) {
            if (result.username === _validate.username
              && result.validPassword(_validate.password, result.password_hash, result.salt)) {
              return res.status(200).send({ message: USER.VALIDATED_TOKEN });
            }
          }
          return res.status(400).send({ message: USER.NAME_PASSWORD_TOKEN_MISMATCH });
        }
      );
    } else {
      return res.status(401).send({ message: VERIFY.TOKEN_EXPIRED });
    }
  };
}

export default new loginController();
