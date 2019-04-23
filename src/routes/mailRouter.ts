import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/mailController";

export class MailRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.post('/mail', controller.sendMail);
    }
}