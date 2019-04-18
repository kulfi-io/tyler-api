import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/durationController";

export class DurationRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/duration', controller.getAll);
        router.get('/v1/admin/duration/:id', controller.getOne);
        router.post('/v1/admin/duration', controller.create);
        router.put('/v1/admin/duration/:id', controller.update);
        router.delete('/v1/admin/duration/:id', controller.deactivate);
    }
}