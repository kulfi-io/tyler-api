import { BaseController } from './base-controller';
import { ILogin, IValidate, IUserReset, IResetAccount, IReset, IUser } from '../models/model-interfaces';
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

      this.model.findOne({email: _resetAccount.email})
      .then((user) => {
          if(user) {
            const _token = user.generateValidationToken(user.username, user._id);
            
            if(!_token)
              res.status(400).send({message: USER.TOKEN_GENERATION_ERROR});
            
            this.model.findByIdAndUpdate(user._id
              , { tokenValidated: false, validationToken: _token }
              , {new: true})
            .then((user) => {

              if(user) {
                const _user: IUserReset = {
                  username: this.encryptIV(user.username),
                  email: this.encryptIV(user.email),
                  firstname: this.encryptIV(user.firstName),
                  lastname: this.encryptIV(user.lastName),
                  token: user.validationToken
              
                };
                res.status(200).send({message: _user});

              } else {
                res.status(400).send({message: USER.USER_UPDATE_FAILURE});
              }
            })
            .catch((err) => {
              res.status(400).send({message: err.message});
            });
          } else {
            res.status(400).send({message: USER.INVALID_USER});
          }
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
      
  }

  resetPassword = (req: Request, res: Response) => {
      
    if (!req.body.username || !req.body.password || !req.body.email || !req.body.token) {
        return res.status(400).send({message: USER.MISSING_REQUIRED_ITEMS});
      }

      const _data: IReset = {
        username: this.decryptIV(req.body.username),
        email: this.decryptIV(req.body.email),
        password: this.decryptIV(req.body.password),
        token: this.removeLineBreakEmailToken(req.body.token)
      }

      const _decoded = this.decodeToken(_data.token);
      
      if(!_decoded)
        return res.status(400).send({ message: VERIFY.DECODING_ERROR });

        if(_decoded.exp > Date.now() / 1000) {
          this.model.findOne(
            {_id: _decoded.id, validationToken: _data.token, email: _data.email})
          .then((user) => {

              if(user) {

                user.tokenValidated = true;
                user.salt = user.generateSalt();
                user.password_hash = user.generatePasswordHash(_data.password, user.salt);

                this.model.findByIdAndUpdate(user._id
                  ,{salt: user.salt, password_hash: user.password_hash, tokenValidated: user.tokenValidated}
                  ,{new: true},
                  (err: Error, data) => {

                    if(err) return res.status(400).send({message: err.message});
                    
                    if(data) {
                      return res.status(200).send({message: USER.USER_UPDATED});
                    } else {
                      return res.status(400).send({message: USER.USER_UPDATE_FAILURE});
                    }

                });

              } else {
                return res.status(400).send({message: USER.INVALID_USER_OR_EMAIL_OR_TOKEN});
              }
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
        }
  };

  verifyUser = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password || !req.body.token) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _validate: IValidate = {
      token: this.removeLineBreakEmailToken(req.body.token),
      username: this.decryptIV(req.body.username),
      password: this.decryptIV(req.body.password)
    }

    const _decoded = this.decodeToken(_validate.token);
    
    if(!_decoded)
      return res.status(400).send({ message: VERIFY.DECODING_ERROR });

    if(_decoded.exp > Date.now() / 1000) {

      this.model.findOneAndUpdate({_id: _decoded.id, validationToken: _validate.token}, {tokenValidated: true}
        , (err: Error, result) => {
          if (err) return res.status(400).send(err.message);

          if (result) {
            if (result.username === _validate.username
              && result.validPassword(_validate.password, result.password_hash, result.salt)) {
                return res.status(200).send({ message: USER.VALIDATED_TOKEN });
            }
          } else {
            return res.status(400).send({ message: USER.NAME_PASSWORD_TOKEN_MISMATCH });
          }

      });
    } else {
      return res.status(401).send({ message: VERIFY.TOKEN_EXPIRED });
    }

    // let _decoded;

    // try {
    //   _decoded = <IDecoded>(
    //     jwt.verify(_validate.token, this.secret)
    //   );
    // }
    // catch {
    // }


    // if (!_decoded)
    //   return res.status(400).send({ message: VERIFY.DECODING_ERROR });

    // if (_decoded.exp > Date.now() / 1000) {

    //   this.model.findByIdAndUpdate(
    //     _decoded.id,
    //     { tokenValidated: true },
    //     (err: Error, result) => {
    //       if (err) return res.status(400).send(err.message);

    //       if (result) {
    //         if (result.username === _validate.username
    //           && result.validPassword(_validate.password, result.password_hash, result.salt)) {
    //           return res.status(200).send({ message: USER.VALIDATED_TOKEN });
    //         }
    //       }
    //       return res.status(400).send({ message: USER.NAME_PASSWORD_TOKEN_MISMATCH });
    //     }
    //   );
    // } else {
    //   return res.status(401).send({ message: VERIFY.TOKEN_EXPIRED });
    // }
  };
}

export default new loginController();
