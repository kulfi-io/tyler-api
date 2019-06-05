import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/userController";

export class UserRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/user', controller.getAll);
        router.get('/v1/user/:id', controller.getOne);
        router.post('/v1/user', controller.create);
        router.put('/v1/user', controller.update);
        router.put('/v1/user/:id', controller.deactivate);
        router.delete('/v1/user/:id', controller.detete);
    }
}