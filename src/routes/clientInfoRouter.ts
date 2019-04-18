import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/clientController";

export class ClientInfoRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/clientinfo', controller.getAll);
    }
}