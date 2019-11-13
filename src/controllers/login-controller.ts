import { BaseController } from './base-controller';
import {
  ILogin,
  IReset,
  IResetAccount,
  IUserReset,
  IValidate,
  ICookieUser
  } from '../models/model-interfaces';
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
      username: this.decryptIv(req.body.username),
      password: this.decryptIv(req.body.password)
    }

    this.model.findOne({ username: _login.username.toString() }).exec(
      (err: Error, user) => {
        if (err) return res.status(400).send({ message: err.message });

        if (user) {

          if (!user.validPassword(_login.password.toString(), user.password_hash, user.salt)) {
            return res
              .status(400)
              .send({ message: USER.NAME_PASSWORD_MISMATCH });
          }

          if (!user.tokenValidated) {
            return res
              .status(401)
              .send({ message: USER.TOKEN_VALIDATION_NEEDED });
          }

          const _user: ICookieUser = {
            id: this.encryptIv(this.mongoIdObjectToString(user._id)),
            fullname:  this.encryptIv(`${user.firstName} ${user.lastName}`),
            firstname: this.encryptIv(user.firstName),
            lastname: this.encryptIv(user.lastName),
            email: this.encryptIv(user.email)
          }
          // const _id = this.encrypt(this.mongoIdObjectToString(user._id));
          // const _fullname = this.encrypt(`${user.firstName} ${user.lastName}`);
          return res.status(200).send({ message: `Welcome back ${user.firstName}`, user: _user});
        }

        return res.status(400).send({ message: USER.INVALID_USER }); 
      }
    );
  };

  resetPasswordRequest = (req: Request, res: Response) => {

    if (!req.body.email) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }


    const _resetAccount: IResetAccount = {
      email: this.decryptIv(req.body.email)
    }


    this.model.findOne({ email: _resetAccount.email })
      .then((user) => {
        if (user) {
          const _token = user.generateValidationToken(user.username, user._id);

          if (!_token)
            res.status(400).send({ message: USER.TOKEN_GENERATION_ERROR });

          this.model.findByIdAndUpdate(this.mongoIdObject(user._id)
            , { tokenValidated: false, validationToken: _token }
            , {new: true})
            .then((user) => {

              if (user) {

                const _user: IUserReset = {
                  username: this.encryptIv(user.username),
                  email: this.encryptIv(user.email),
                  firstname: this.encryptIv(user.firstName),
                  lastname: this.encryptIv(user.lastName),
                  token: user.validationToken

                };

                res.status(200).send({ message: _user });

              } else {
                res.status(400).send({ message: USER.USER_UPDATE_FAILURE });
              }
            })
            .catch((err) => {
              res.status(400).send({ message: err.message });
            });
        } else {
          res.status(400).send({ message: USER.INVALID_USER });
        }
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });

  }

  resetPassword = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password || !req.body.email || !req.body.token) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _data: IReset = {
      username: this.decryptIv(req.body.username),
      email: this.decryptIv(req.body.email),
      password: this.decryptIv(req.body.password),
      token: this.removeLineBreakEmailToken(req.body.token)
    }

    const _decoded = this.decodeToken(_data.token);

    if (!_decoded)
      return res.status(400).send({ message: VERIFY.DECODING_ERROR });

    if (_decoded.exp > Date.now() / 1000) {


      this.model.findOne(
        { _id: this.mongoIdObject(_decoded.id), validationToken: _data.token, email: _data.email })
        .then((user) => {

          if (user) {

            user.tokenValidated = true;
            user.salt = user.generateSalt();
            user.password_hash = user.generatePasswordHash(_data.password.toString(), user.salt);

            this.model.findByIdAndUpdate(user._id
              , { salt: user.salt, password_hash: user.password_hash, tokenValidated: user.tokenValidated }
              , { new: true },
              (err: Error, data) => {

                if (err) return res.status(400).send({ message: err.message });

                if (data) {
                  return res.status(200).send({ message: USER.USER_UPDATED });
                } else {
                  return res.status(400).send({ message: USER.USER_UPDATE_FAILURE });
                }

              });

          } else {
            return res.status(400).send({ message: USER.INVALID_USER_OR_EMAIL_OR_TOKEN });
          }
        })
        .catch((err) => {
          res.status(400).send({ message: err.message });
        });
    }
  };

  verifyUser = (req: Request, res: Response) => {

    if (!req.body.username || !req.body.password || !req.body.token) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _validate: IValidate = {
      token: this.removeLineBreakEmailToken(req.body.token),
      username: this.decryptIv(req.body.username),
      password: this.decryptIv(req.body.password)
    }

    const _decoded = this.decodeToken(_validate.token);

    if (!_decoded)
      return res.status(400).send({ message: VERIFY.DECODING_ERROR });

    if (_decoded.exp > Date.now() / 1000) {

      this.model.findOneAndUpdate({ _id: _decoded.id, validationToken: _validate.token }, { tokenValidated: true }
        , (err: Error, result) => {
          if (err) return res.status(400).send(err.message);

          if (result) {
            if (result.username === _validate.username
              && result.validPassword(_validate.password.toString(), result.password_hash, result.salt)) {
              
              const _user: ICookieUser = {
                id: this.encryptIv(this.mongoIdObjectToString(result._id)),
                fullname:  this.encryptIv(`${result.firstName} ${result.lastName}`),
                firstname: this.encryptIv(result.firstName),
                lastname: this.encryptIv(result.lastName),
                email: this.encryptIv(result.email)
              } 
              
              return res.status(200).send({ message: USER.VALIDATED_TOKEN, user: _user });
            }
          } else {
            return res.status(400).send({ message: USER.NAME_PASSWORD_TOKEN_MISMATCH });
          }

        });
    } else {
      return res.status(401).send({ message: VERIFY.TOKEN_EXPIRED });
    }

  };
}

export default new loginController();
