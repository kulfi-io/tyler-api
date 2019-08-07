import * as uuid from 'uuid';
import User from '../models/user';
import Verify from '../models/verify';
import { BaseController } from './base-controller';
import { IUser, IUserType } from '../models/model-interfaces';
import { IUserModel } from '../db/user-schema';
import { IUserTypeModel } from '../db/user-type-schema';
import { MongooseDocument, Types } from 'mongoose';
import { Request, Response } from 'express';
import { USER } from '../db/db-enums';

export class UserController extends BaseController {
  private userModel: IUserModel;
  private typeModel: IUserTypeModel;
  private verify: Verify;

  constructor() {
    super();
    this.userModel = this.DB.Models.User
    this.typeModel = this.DB.Models.UserType;
    this.verify = new Verify();

  }

  private mapItems(model: IUser[]): User[] {
    let _data = [];

    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }

    return _data;
  }

  private mapItem(model: IUser): User {
    const _data = new User();
    const _type = this.convertToSchemaType<MongooseDocument, IUserType>(model.userType);


    _data.active = model.active ? this.encryptIV('true') : this.encryptIV('false');
    _data.email = this.encryptIV(model.email);
    _data.firstName = this.encryptIV(model.firstName);
    _data.id = this.encryptIV(model.id);
    _data.lastName = this.encryptIV(model.lastName);
    _data.tokenValidated = model.tokenValidated ? this.encryptIV('true') : this.encryptIV('false');
    _data.username = this.encryptIV(model.username);
    _data.validationToken = this.encryptIV(model.validationToken);
    _data.userType.id = this.encryptIV(_type.id);
    _data.userType.display = this.encryptIV(_type.display);
    _data.userType.description = this.encryptIV(_type.description);
    _data.userType.active = _type.active ? this.encryptIV('true') : this.encryptIV('false');

    return _data;
  }

  getAll = (req: Request, res: Response) => {
    try {

      this.userModel.aggregate([
        { $match: { 'active': true } },
        {
          $lookup: {
            from: 'usertypes',
            localField: 'userTypeId',
            foreignField: '_id',
            as: 'userType',
          }
        },
        { $sort: { 'username': 1 } },
        { $limit: 200 },
        {
          $unwind: '$userType'
        }

      ])
        .exec((err: Error, data) => {
          if (err) return res.status(400).send({ message: err.message });
          const _data = this.mapItems(data);
          return res.status(200).send(_data);
        });


    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  getOne = (req: Request, res: Response) => {
    try {

      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      this.userModel.aggregate([
        { $match: { '_id': this.mongoIdObject(req.params.id), 'active': true } },
        {
          $lookup: {
            from: 'usertypes',
            localField: 'userTypeId',
            foreignField: '_id',
            as: 'userType'
          }
        },
        { $limit: 1 },
        {
          $unwind: '$userType'
        }
      ])
        .exec((err: Error, data) => {
          if (err) return res.status(400).send({ message: err.message });
          const _data = this.mapItems(data);
          return res.status(200).send(_data);
        });

    } catch (err) {
      return res.status(400).send({ message: err.message });
    }

  };

  create = (req: Request, res: Response) => {

    if (
      !req.body ||
      !req.body.username ||
      !req.body.email ||
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.username ||
      !req.body.password ||
      !req.body.type
    ) {
      return res.status(400).send({ message: USER.MISSING_REQUIRED_ITEMS });
    }

    const _pwd = this.decryptIV(req.body.password)

    const _user = new this.userModel({
      id: uuid(),
      email: this.decryptIV(req.body.email),
      firstName: this.decryptIV(req.body.firstname),
      lastName: this.decryptIV(req.body.lastname),
      username: this.decryptIV(req.body.username),

    });

    if (!_user.matchPasswordCriteria(_pwd))
      return res.status(400).send({ message: USER.PASSWORD_MISMATCH });

    _user.salt = _user.generateSalt();
    _user.password_hash = _user.generatePasswordHash(_pwd, _user.salt);

    const _token = _user.generateValidationToken(_user.username, _user._id);

    if (!_token)
      return res.status(400).send({ message: USER.TOKEN_GENERATION_ERROR });

    _user.validationToken = _token;
    const _type = this.decryptIV(req.body.type);

    this.typeModel.findOne({ active: true, 'display': _type }, (err: Error, data: IUserType) => {
      if (err) return res.status(400).send({ message: USER.INVALID_TYPE });

      if (data)
        _user.userTypeId = data._id;

    })
      .then(() => {

        this.userModel.create(_user, (err: Error, data: IUser) => {
          if (err) {
            const _msg = this.correctDbMessage(err.message)
            return res.status(400).send({ message: _msg });
          }

          this.verify.email = this.encryptIV(data.email);
          this.verify.username = this.encryptIV(data.username);
          this.verify.token = data.validationToken;
          this.verify.userId = data._id;

          return res.status(201).send({ message: this.verify });

        });
      });
  }

  update = (req: Request, res: Response) => {
    if (!req.params || !req.params.id) {
      return res.status(400).send({ message: USER.INVALID_IDENTIFIER });
    }

    if (
      !req.body ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.username
    ) {
      return res.status(400).send({ message: USER.MISSING_UPDATABLE_ITEMS });
    }

    const _firstName = req.body.firstName ? req.body.firstName : "";
    const _lastName = req.body.lastName ? req.body.lastName : "";

    if (_firstName.length == 0 || _lastName.length == 0) {
      return res
        .status(400)
        .send({ message: USER.MISSING_UPDATABLE_ITEMS });
    }

    const _model = new this.userModel({
      firstName: _firstName,
      lastName: _lastName
    });

    this.userModel.findByIdAndUpdate({ 'id': req.params.id }, _model, (err: Error) => {
      if (err) return res.status(400).send({ message: err.message });
      return res.status(200).send();
    });

  }

  deactivate = (req: Request, res: Response) => {

    if (!req.params || !req.params.id) {
      return res.status(400).send({ message: USER.MISSING_UPDATABLE_ITEMS });
    }

    this.userModel.findByIdAndUpdate(
      req.params.id,
      { active: false },
      (err: Error) => {
        if (err) return res.status(400).send({ message: err.message });
        return res.status(204).send({ message: USER.DEACTIVATED });
      }
    );
  };

  detete = (req: Request, res: Response) => {
    if (!req.params || !req.params.id) {
      return res.status(400).send({ message: USER.MISSING_UPDATABLE_ITEMS });
    }

    this.userModel.deleteOne({ "_id": Types.ObjectId(req.params.id) })
      .then(() => {
        return res.status(200).send({ message: USER.DELETED });
      })
      .catch(err => {
        console.error(err);
      });

  }
}

export default new UserController();
