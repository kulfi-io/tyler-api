import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/apiUserController";

export class ApiUserRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/apiuser', controller.getAll);
        router.get('/v1/apiuser/:id', controller.getOne);
        router.post('/v1/apiuser', controller.create);
        router.put('/v1/apiuser/:id', controller.update);
        router.delete('/v1/apiuser/:id', controller.deactivate);
    }
}