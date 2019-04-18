import { Request, Response } from "express";
import * as uuid from "uuid";
import { IValidClient } from "../db/interfaces";
import Schema from "../db/validClientSchema";
import ValidClient from "../models/validClient";

export class ValidClientController {
  constructor() {}

  private mapItems(model: IValidClient[]): ValidClient[] {
    let _data = [];
    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }
    return _data;
  }

  private mapItem(model: IValidClient): ValidClient {
    console.log("_id", model._id);
    const _data = new ValidClient();
    _data.active = model.active;
    _data.contactName = model.contactName;
    _data.description = model.description;
    _data.email = model.email;
    _data.id = model.id;
    _data.ipAddress = model.ipAddress;
    _data.name = model.name;
    _data.phoneNumber = model.phoneNumber;

    return _data;
  }

  getAll = (req: Request, res: Response) => {
    Schema.find({ active: true }, (err, data) => {
      if (err) return res.status(500).send({ message: err.message });
      const _data = this.mapItems(data);

      return res.status(200).send(_data);
    });
  };

  getOne = (req: Request, res: Response) => {
    try {
      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      Schema.findById(req.params.id, (err, data: IValidClient) => {
        if (err) return res.status(500).send({ message: err.message });
        const _data = this.mapItem(data);
        return res.status(200).send(data);
      });

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  create = (req: Request, res: Response) => {
    try {
      if (
        !req.body.active ||
        !req.body.contactname ||
        !req.body.description ||
        !req.body.email ||
        !req.body.ipaddress ||
        !req.body.name ||
        !req.body.phonenumber
      ) {
        return res.status(400).send({ message: "required data is missing" });
      }

      const _model = new Schema({
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

      Schema.create(_model, (err: Error, data: IValidClient) => {
        if (err) return res.status(400).send({ message: err.message });
        const _data = this.mapItem(data);
        return res.status(201).send(_data);
      });

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  update = (req: Request, res: Response) => {
    try {
      if (
        !req.body.contactname ||
        !req.body.description ||
        !req.body.email ||
        !req.body.fdnq ||
        !req.body.ipaddress ||
        !req.body.name ||
        !req.body.phonenumber
      ) {
        return res.status(400).send({ message: "required data is missing" });
      }

      const _model = new ValidClient();
      _model.contactName = req.body.contactname;
      _model.description = req.body.description;
      _model.email = req.body.email;
      _model.ipAddress = req.body.ipaddress;
      _model.name = req.body.name;
      _model.phoneNumber = req.body.phonenumber;

      Schema.findByIdAndUpdate(req.params.id, _model, (err: Error) => {
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
        { active: false, token: "" },
        (err: Error) => {
          if (err) return res.status(400).send({ message: err.message });
          return res.status(204).send();
        }
      );

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };
}

export default new ValidClientController();
