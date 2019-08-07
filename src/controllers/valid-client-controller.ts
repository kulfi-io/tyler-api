import * as uuid from 'uuid';
import ValidClient from '../models/valid-client';
import { BaseController } from './base-controller';
import { IValidClient } from '../models/model-interfaces';
import { IValidClientModel } from '../db/valid-client-schema';
import { Request, Response } from 'express';
import { VALIDCLIENT } from '../db/db-enums';


export class ValidClientController extends BaseController {
  public model: IValidClientModel;
  constructor() {
    super();
    this.model = this.DB.Models.ValidClient
  }

  private mapItems(model: IValidClient[]): ValidClient[] {
    let _data = [];
    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }
    return _data;
  }

  private mapItem(model: IValidClient): ValidClient {
    const _data = new ValidClient();
    _data.active = model.active ? this.encryptIV('true') : this.encryptIV('false');
    _data.contactName = this.encryptIV(model.contactName);
    _data.description = this.encryptIV(model.description);
    _data.email = this.encryptIV(model.email);
    _data.id = model.id;
    _data.ipAddress = this.encryptIV(model.ipAddress);
    _data.name = this.encryptIV(model.name);
    _data.phoneNumber = this.encryptIV(model.phoneNumber.toString());

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
      return res.status(400).send({ message: VALIDCLIENT.INVALID_IDENTIFIER });
    }

    this.model.findById(req.params.id, (err, data: IValidClient) => {
      if (err) return res.status(500).send({ message: err.message });
      const _data = this.mapItem(data);
      return res.status(200).send(_data);
    });

  };

  create = (req: Request, res: Response) => {
    if (
      !req.body.active ||
      !req.body.contactname ||
      !req.body.description ||
      !req.body.email ||
      !req.body.ipaddress ||
      !req.body.name ||
      !req.body.phonenumber
    ) {
      return res.status(400).send({ message: VALIDCLIENT.MISSING_REQUIRED_ITEMS });
    }

    const _model = new this.model({
      id: uuid(),
      active: true,
      contactName: req.body.contactname,
      description: req.body.description,
      email: req.body.email,
      ipAddress: req.body.ipaddress,
      name: req.body.name,
      phoneNumber: req.body.phonenumber
    });

    _model.generateValidationToken();

    this.model.create(_model, (err: Error, data: IValidClient) => {
      if (err) return res.status(400).send({ message: err.message });
      const _data = this.mapItem(data);
      return res.status(201).send(_data);
    });

  };

  update = (req: Request, res: Response) => {
    if (
      !req.body.contactname ||
      !req.body.description ||
      !req.body.email ||
      !req.body.fdnq ||
      !req.body.ipaddress ||
      !req.body.name ||
      !req.body.phonenumber
    ) {
      return res.status(400).send({ message: VALIDCLIENT.MISSING_UPDATABLE_ITEMS });
    }

    const _model = new ValidClient();
    _model.contactName = req.body.contactname;
    _model.description = req.body.description;
    _model.email = req.body.email;
    _model.ipAddress = req.body.ipaddress;
    _model.name = req.body.name;
    _model.phoneNumber = req.body.phonenumber;

    this.model.findByIdAndUpdate(req.params.id, _model, (err: Error) => {
      if (err) return res.status(400).send({ message: err.message });
      return res.status(200).send();
    });

  };

  deactivate = (req: Request, res: Response) => {
    if (!req.params || !req.params.id) {
      return res.status(400).send({ message: VALIDCLIENT.INVALID_IDENTIFIER });
    }

    this.model.findByIdAndUpdate(
      req.params.id,
      { active: false, token: "" },
      (err: Error) => {
        if (err) return res.status(400).send({ message: err.message });
        return res.status(204).send();
      }
    );

  };
}

export default new ValidClientController();
