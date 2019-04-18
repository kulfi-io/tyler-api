import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/serviceController";

export class ServiceRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/service', controller.getAll);
        router.get('/v1/admin/service/:id', controller.getOne);
        router.post('/v1/admin/service', controller.create);
        router.put('/v1/admin/service/:id', controller.update);
        router.delete('/v1/admin/service/:id', controller.deactivate);
    }
}