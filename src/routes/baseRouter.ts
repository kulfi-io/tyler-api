import {NextFunction, Request, Response} from 'express';

export class BaseRoute {
    protected title: string;

    constructor() {
        this.title = "Welcome to Tyler-CMT Api";
    }

   

    public responseData(req: Request, res: Response, data?: Object) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.status(200);
        res.send(data);
    }
}