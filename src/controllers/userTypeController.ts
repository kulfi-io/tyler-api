import { Request, Response } from "express";
import * as uuid from "uuid";
import { IUserType } from "../db/interfaces";
import Schema from "../db/userTypeSchema";
import UserType from "../models/userType";

export class UserTypeController {
  constructor() {}

  private mapItems(model: IUserType[]): UserType[] {
    let _data = [];
    for (let i = 0; i < model.length; i++) {
      _data.push(this.mapItem(model[i]));
    }
    return _data;
  }

  private mapItem(model: IUserType): UserType {
    console.log("type: " + model.display, model._id);
    const _data = new UserType();
    _data.active = model.active;
    _data.description = model.description;
    _data.display = model.display;
    _data.id = model.id;

    return _data;
  }

  getAll = (req: Request, res: Response) => {
    Schema.find({ active: true }, (err, data) => {
      if (err) return res.status(500).send({ message: err.message });
      console.log('data', data);
      const _data = this.mapItems(data);
      return res.status(200).send(_data);
    });
  };

  getOne = (req: Request, res: Response) => {
    try {
      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      Schema.findById(req.params.id, (err, data: IUserType) => {
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
      if (!req.body || !req.body.description || !req.body.display) {
        return res.status(400).send();
      }

      const _model = new UserType();
      _model.id = uuid();
      _model.description = req.body.description;
      _model.display = req.body.display;
      _model.active = true;

      Schema.create(_model, (err: Error, data: IUserType) => {
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

      const desc = req.body.description ? req.body.description : "";
      const disp = req.body.display ? req.body.display : "";

      if (desc.length == 0 || disp.length == 0) {
        return res
          .status(400)
          .send({ message: "description or display is null or empty" });
      }

      const _userType = {
        description: desc,
        display: disp
      };

      Schema.findByIdAndUpdate(req.params.id, _userType, (err: Error) => {
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

export default new UserTypeController();
