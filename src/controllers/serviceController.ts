import { Request, Response } from "express";
import * as uuid from "uuid";
import { IService } from "../db/interfaces";
import Schema from "../db/serviceSchema";
import Service from "../models/service";

export class ServiceController {
  constructor() {}

  private mapItems(model: IService[]): Service[] {
    let _data = [];
    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }
    return _data;
  }

  private mapItem(model: IService): Service {
    const _data = new Service();
    _data.active = model.active;
    _data.description = model.description;
    _data.id = model.id;
    _data.shortDescription = model.shortDescription;

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

      Schema.findById(req.params.id, (err, data: IService) => {
        if (err) return res.status(500).send({ message: err.message });
        const _data = this.mapItem(data);
        return res.status(200).send(_data);
      });

      return;
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  };

  create = (req: Request, res: Response) => {
    try {
      if (!req.body || !req.body.description || !req.body.shortDescription) {
        return res.status(400).send();
      }

      const _model = new Service();
      _model.id = uuid();
      _model.active = true;
      _model.description = req.body.description;
      _model.shortDescription = req.body.shortDescription;

      Schema.create(_model, (err: Error, data: IService) => {
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
      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      const description = req.body.description ? req.body.description : "";
      const shortDesc = req.body.shortDescription
        ? req.body.shortDescription
        : "";

      if (description.length == 0 || shortDesc.length == 0) {
        return res
          .status(400)
          .send({ message: "description is null or empty" });
      }

      const _model = new Schema({
        description: description,
        shortDesc: shortDesc
      });

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
        { active: false },
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

export default new ServiceController();
