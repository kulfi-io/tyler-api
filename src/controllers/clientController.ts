// import { Request, Response } from "express";
// import ClientInfo from "../models/clientInfo";

// export class ClientInfoController {
//   constructor() {}

//   getAll = (req: Request, res: Response) => {
//     const _data = new ClientInfo();
//     _data.hostname = req.hostname;
//     _data.ip = req.connection.remoteAddress;
//     _data.forwared = req.headers.forwarded ? req.headers.forwarded : "";

//     return res.status(200).send(_data);
//   };
// }

// export default new ClientInfoController();
