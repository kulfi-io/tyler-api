import { BaseRoute } from './base-router';
import {
    NextFunction,
    Request,
    Response,
    Router
    } from 'express';

export class IndexRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    public index(req: Request, res: Response, next: NextFunction) {
        this.title = 'Index | Tyler-CMT';

        let data: Object = {
            "message": "Welcome!"
        }

        this.responseData(req, res, data);
    }
}