import { Request, Response } from "express";
import * as uuid from "uuid";
import Schema from "../db/apiUserSchema";
import UserTypeSchema from "../db/userTypeSchema";
import { IApiUser } from "../db/interfaces";
import User from "../models/apiUser";
import UserType from "../models/userType";
import { BaseController } from "./baseController";

export class ApiUserController extends BaseController {
  private username:string;
  private email:string;
  private firstName:string;
  private lastName:string;
  private password:string;
  private type:string;

  constructor() {
    super();

    this.username='';
    this.email='';
    this.firstName='';
    this.lastName='';
    this.password='';
    this.type='';
  }


  private mapItems(model: {}[]): User[] {
    let _data = [];

    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }

    return _data;
  }

  private mapItem(model: {}): User {
    const _data = new User();
    const _model = JSON.parse(JSON.stringify(model));
    const _type = new UserType();

    _type.id = this.encryptData(_model.userType[0].id);
    _type.display = this.encryptData(_model.userType[0].display);
    _type.description = this.encryptData(_model.userType[0].description);
    _type.active = _model.userType[0].active;

    _data.active = _model.active;
    _data.email = this.encryptData(_model.email);
    _data.firstName = this.encryptData(_model.firstName);
    _data.id = this.encryptData(_model.id);
    _data.lastName = this.encryptData(_model.lastName);
    _data.tokenValidated = _model.tokenValidated;
    _data.username = this.encryptData(_model.username);
    _data.userType = _type;

    return _data;
  }

  getAll = (req: Request, res: Response) => {
    try {

      Schema.aggregate([
        { $match: {'active': true }},
        { $lookup: {
          from: 'usertypes',
          localField: 'userTypeId',
          foreignField: '_id',
          as : 'userType'
        }},
        { $sort: {'username': 1}},
        {$limit: 200}

      ])
      .exec((err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });
        const _data = this.mapItems(data);
        return res.status(200).send(_data);
      });
      
      return;
      
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  getOne = (req: Request, res: Response) => {
    try {

      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      Schema.aggregate([
        { $match: {'id': req.params.id, 'active': true }},
        { $lookup: {
          from: 'usertypes',
          localField: 'userTypeId',
          foreignField: '_id',
          as : 'userType'
        }},
        {$limit: 1}
      ])
      .exec((err: Error, data) => {
        if (err) return res.status(400).send({ message: err.message });
        const _data = this.mapItems(data);
        return res.status(200).send(_data);
      });

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  create = (req: Request, res: Response) => {
    try {

      if (
        !req.body ||
        !req.body.email ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.username ||
        !req.body.password
      ) {
        return res.status(400).send({ message: "missing data item(s)" });
      }

      let _targetType='';

      this.email = req.body.email;
      this.firstName = req.body.firstName;
      this.lastName = req.body.lastName;
      this.username = req.body.username;
      this.password = req.body.password;
      this.type = req.body.type;

      if(this.email == ''){
        return res.status(400).send({message: 'failed to decrypt'});
      }

      UserTypeSchema.findOne({ active: true, 'display': this.type }, (err, data) => {

        if (err) return res.status(400).send({ message: err.message });
        
        if(data) _targetType = data._id;
        
        return;

      }).then(() => {

        if(_targetType) {

          const _model = new Schema({
            id: uuid(),
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            userTypeId: _targetType,
          });

          if (!_model.setPassword(this.password)) {
            return res
              .status(400)
              .send({ message: "password does not match criteria" });
          }

          if (!_model.generateValidationToken()) {
            return res
              .status(400)
              .send({ message: "error occured while generating token" });
          }

          Schema.create(_model, (err: Error, data: IApiUser) => {
            if (err) return res.status(400).send({ message: err.message });
            return res.status(201).send({message: 'created'});
          });

        }

        return;

      });

      return;
     
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  update = (req: Request, res: Response) => {
    try {

      if (!req.params || !req.params.id) {
        return res.status(400).send({ message: "target id is invalid" });
      }

      if (
        !req.body ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.username
      ) {
        return res.status(400).send();
      }

      const _firstName = req.body.firstName ? req.body.firstName : "";
      const _lastName = req.body.lastName ? req.body.lastName : "";

      if (_firstName.length == 0 || _lastName.length == 0) {
        return res
          .status(400)
          .send({ message: "missing and null or empty data" });
      }

      const _model = new Schema({
        firstName: _firstName,
        lastName: _lastName
      });

      Schema.findByIdAndUpdate({'id': req.params.id }, _model, (err: Error) => {
        if (err) return res.status(400).send({ message: err.message });
        return res.status(200).send();
      });

      return;

    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  deactivate = (req: Request, res: Response) => {
    try {

      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      Schema.findByIdAndUpdate(
        req.params.id,
        { active: false },
        (err: Error) => {
          if (err) return res.status(400).send({ message: err.message });
          return res.status(204).send({message: 'deactivated'});
        }
      );

      return;

    } catch (err) {
      return res.send(400).send({ message: err.message });
    }
  };
}

export default new ApiUserController();
