import * as uuid from 'uuid';
import UserType from '../models/user-type';
import { BaseController } from './base-controller';
import { IUserType } from '../models/model-interfaces';
import { IUserTypeModel } from '../db/user-type-schema';
import { Request, Response } from 'express';
import { USERTYPE } from '../db/db-enums';

export class UserTypeController extends BaseController {
  private model: IUserTypeModel

  constructor() {
    super();
    this.model = this.DB.Models.UserType
  }

  private mapItems(model: IUserType[]): UserType[] {

    let _data = [];
    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }
    return _data;

  }

  private mapItem(model: IUserType): UserType {

    const _data = new UserType();
    _data.active = model.active ? this.encryptData('true') : this.encryptData('false');
    _data.description = this.encryptData(model.description);
    _data.display = this.encryptData(model.display);
    _data.id = this.encryptData(model.id);

    return _data;

  }

  getAll = (req: Request, res: Response) => {

    this.model.find({ active: true }, (err, data) => {
      if (err) return res.status(500).send({ message: err.message });
      const _data = this.mapItems(data);
      return res.status(200).send(_data);
    });

  };

  getOne = (req: Request, res: Response) => {

    if (!req.params || !req.params.id) {
      return res.status(400).send({message: USERTYPE.INVALID_IDENTIFIER});
    }

    this.model.findById(req.params.id, (err, data: IUserType) => {
      if (err) return res.status(500).send({ message: err.message });
      const _data = this.mapItem(data);
      return res.status(200).send(_data);
    });

  };

  create = (req: Request, res: Response) => {

    if (!req.body || !req.body.description || !req.body.display) {
      return res.status(400).send({message: USERTYPE.MISSING_REQUIRED_ITEMS});
    }

    const _model = new UserType();
    _model.id = uuid();
    _model.description = req.body.description;
    _model.display = req.body.display;
    _model.active = true;

    this.model.create(_model, (err: Error, data: IUserType) => {
      if (err) return res.status(400).send({ message: err.message });
      const _data = this.mapItem(data);
      return res.status(201).send(_data);
    });

  };

  update = (req: Request, res: Response) => {

    if (!req.params || !req.params.id) {
      return res.status(400).send();
    }

    const desc = req.body.description ? req.body.description : "";
    const disp = req.body.display ? req.body.display : "";

    if (desc.length == 0 || disp.length == 0) {
      return res
        .status(400)
        .send({ message: USERTYPE.DESCRIPTION_IS_MISSING_OR_NULL });
    }

    const _userType = {
      description: desc,
      display: disp
    };

    this.model.findByIdAndUpdate(req.params.id, _userType, (err: Error) => {
      if (err) return res.status(400).send({ message: err.message });
      return res.status(200).send();
    });

  };

  deactivate = (req: Request, res: Response) => {

    if (!req.params || !req.params.id) {
      return res.status(400).send();
    }

    this.model.findByIdAndUpdate(
      req.params.id,
      { active: false },
      (err: Error) => {
        if (err) return res.status(400).send({ message: err.message });
        return res.status(204).send();
      }
    );
  };
}

export default new UserTypeController();
