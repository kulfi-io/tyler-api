import * as uuid from 'uuid';
import User from '../models/user';
import Verify from '../models/verify';
import { BaseController } from './base-controller';
import { IUser, IUserType, IAccountNote, ICryptoData } from '../models/model-interfaces';
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

  private mapItems(model: User[]): User[] {
    let _data = [];

    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }

    return _data;
  }

  private mapItem(model: User): User {
    const _data = new User();
    const _type = this.convertToSchemaType<MongooseDocument, IUserType>(model.userType);

    _data.active = model.active ? this.encryptIv('true') : this.encryptIv('false');
    _data.email = this.encryptIv(model.email.toString());
    _data.firstName = this.encryptIv(model.firstName.toString());
    _data.id = this.encryptIv(model.id.toString());
    _data.lastName = this.encryptIv(model.lastName.toString());
    _data.tokenValidated = model.tokenValidated ? this.encryptIv('true') : this.encryptIv('false');
    _data.username = this.encryptIv(model.username.toString());
    _data.validationToken = this.encryptIv(model.validationToken.toString());
    _data.userType.id = this.encryptIv(_type.id.toString());
    _data.userType.display = this.encryptIv(_type.display.toString());
    _data.userType.description = this.encryptIv(_type.description.toString());
    _data.userType.active = _type.active ? this.encryptIv('true') : this.encryptIv('false');

    model.notes.forEach((note) => {
      const _note: IAccountNote = {
        id: this.encryptIv(note.id.toString()),
        active: this.encryptIv(note.active.toString()),
        note: this.encryptIv(note.note.toString()),
        title: this.encryptIv(note.title.toString()),
        userId: this.encryptIv(note.userId.toString()),
        createdAt: note.createdAt
      }

      _data.notes.push(_note);
    })

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

    if (!req.body || !req.body.id) {
      return res.status(400).send({ message: USER.INVALID_IDENTIFIER });
    }

    const _id = this.decryptIv(req.body.id);
    const _query = {
      "_id": this.mongoIdObject(_id),
      "active": true
    }

    this.userModel.aggregate([
      { $match: _query },
      {
        $lookup: {
          from: 'accountnotes',
          localField: '_id',
          foreignField: 'userId',
          as: 'notes'
        }
      },
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
      .exec((err: Error, data: User[]) => {
        if (err) {
          return res.status(400).send({ message: err.message });
        }

        const _data = this.mapItems(data);
        return res.status(200).send(_data);
      });
  };

  userList = (req: Request, res: Response) => {

    if (!req.body || !req.body.emails) {
      return res.status(400).send({ message: USER.INVALID_SEARCH_CRITERIA });
    }

    const _emails: string[] = [];

    req.body.emails.forEach((item: string) => {
      _emails.push(this.decryptIv(item));
    });

    const _query = {
      email: {
        $in: _emails
      }
    }

    this.userModel.aggregate([
      { $match: _query },
      {
        $lookup: {
          from: 'accountnotes',
          localField: '_id',
          foreignField: 'userId',
          as: 'notes'
        }
      },
      {
        $lookup: {
          from: 'usertypes',
          localField: 'userTypeId',
          foreignField: '_id',
          as: 'userType'
        }
      },
      {
        $unwind: '$userType'
      }
    ])
      .exec((err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });
        const _data = this.mapItems(data);
        return res.status(200).send(_data);
      });


  }

  search = (req: Request, res: Response) => {

    if (!req.params || !req.params.criteria) {
      return res.status(400).send({ message: USER.INVALID_SEARCH_CRITERIA });
    }

    const _criteria = this.decrypt(req.params.criteria);

    const _query = {
      $or: [
        { username: new RegExp(`.*${_criteria}.*`) },
        { email: new RegExp(`.*${_criteria}.*`) },
        { firstName: new RegExp(`.*${_criteria}.*`) },
        { lastName: new RegExp(`.*${_criteria}.*`) },
      ],
      "active": true
    }

    this.userModel.aggregate([
      { $match: _query },
      {
        $lookup: {
          from: 'accountnotes',
          localField: '_id',
          foreignField: 'userId',
          as: 'notes'
        }
      },
      {
        $lookup: {
          from: 'usertypes',
          localField: 'userTypeId',
          foreignField: '_id',
          as: 'userType'
        }
      },
      { $limit: 50 },
      {
        $unwind: '$userType'
      }
    ])
      .exec((err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });
        const _data = this.mapItems(data);
        return res.status(200).send(_data);
      });
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

    const _pwd = this.decryptIv(req.body.password)

    const _user = new this.userModel({
      id: uuid(),
      email: this.decryptIv(req.body.email),
      firstName: this.decryptIv(req.body.firstname),
      lastName: this.decryptIv(req.body.lastname),
      username: this.decryptIv(req.body.username),

    });

    if (!_user.matchPasswordCriteria(_pwd))
      return res.status(400).send({ message: USER.PASSWORD_MISMATCH });

    _user.salt = _user.generateSalt();
    _user.password_hash = _user.generatePasswordHash(_pwd, _user.salt);

    const _token = _user.generateValidationToken(_user.username, _user._id);

    if (!_token)
      return res.status(400).send({ message: USER.TOKEN_GENERATION_ERROR });

    _user.validationToken = _token;
    const _type = this.decryptIv(req.body.type);

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
          this.verify.email = this.encryptIv(data.email);
          this.verify.username = this.encryptIv(data.username);
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
