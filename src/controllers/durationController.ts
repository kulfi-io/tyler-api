// import { Request, Response } from "express";
// import * as uuid from "uuid";
// import Schema from "../db/durationSchema";
// import { IDuration } from "../db/interfaces";
// import Duration from "../models/duration";

// export class DurationController {
//   constructor() {}

//   private mapItems(model: IDuration[]): Duration[] {
//     let _data = [];
//     for (let i = 0; i < model.length; i++) {
//       _data.push(this.mapItem(model[i]));
//     }
//     return _data;
//   }

//   private mapItem(model: IDuration): Duration {
//     const _data = new Duration();
//     _data.active = model.active;
//     _data.display = model.display;
//     _data.id = model.id;
//     _data.price = model.price;
//     return _data;
//   }

//   getAll = (req: Request, res: Response) => {
//     Schema.find({ active: true }, (err, data) => {
//       if (err) return res.status(500).send({ message: err.message });
//       const _data = this.mapItems(data);
//       return res.status(200).send(_data);
//     });
//   };

//   getOne = (req: Request, res: Response) => {
//     try {
//       if (!req.params || !req.params.id) {
//         return res.status(400).send();
//       }

//       Schema.findById(req.params.id, (err, data: IDuration) => {
//         if (err) return res.status(500).send({ message: err.message });
//         const _data = this.mapItem(data);
//         return res.status(200).send(_data);
//       });

//     } catch (err) {
//       return res.status(400).send({ message: err.message });
//     }
//   };

//   create = (req: Request, res: Response) => {
//     try {
//       if (!req.body || !req.body.description || !req.body.display) {
//         return res.status(400).send();
//       }

//       const _model = new Duration();
//       _model.id = uuid();
//       _model.active = true;
//       _model.display = req.body.display;
//       _model.price = req.body.price;

//       Schema.create(_model, (err: Error, data: IDuration) => {
//         if (err) return res.status(400).send({ message: err.message });
//         const _data = this.mapItem(data);
//         return res.status(201).send(_data);
//       });

//     } catch (err) {
//       return res.status(400).send({ message: err.message });
//     }
//   };

//   update = (req: Request, res: Response) => {
//     try {
//       if (!req.params || !req.params.id) {
//         return res.status(400).send();
//       }

//       const price = req.body.price ? req.body.price : "";
//       const disp = req.body.display ? req.body.display : "";

//       if (price > 0 || disp.length == 0) {
//         return res
//           .status(400)
//           .send({ message: "description or display is null or empty" });
//       }

//       const _model = new Schema({
//         display: disp,
//         price: price
//       });

//       Schema.findByIdAndUpdate(req.params.id, _model, (err: Error) => {
//         if (err) return res.status(400).send({ message: err.message });
//         return res.status(200).send();
//       });

//     } catch (err) {
//       return res.status(400).send({ message: err.message });
//     }
//   };

//   deactivate = (req: Request, res: Response) => {
//     try {
//       if (!req.params || !req.params.id) {
//         return res.status(400).send();
//       }

//       Schema.findByIdAndUpdate(
//         req.params.id,
//         { active: false },
//         (err: Error) => {
//           if (err) return res.status(400).send({ message: err.message });
//           return res.status(204).send();
//         }
//       );

//     } catch (err) {
//       return res.status(400).send({ message: err.message });
//     }
//   };
// }

// export default new DurationController();
