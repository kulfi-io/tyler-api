import { BaseRoute } from "./baseRouter";
import { Router} from "express";
import controller from "../controllers/loginController";

export class LoginRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.post('/v1/verify', controller.validateEmailToken);
        router.post('/v1/login', controller.login);
        router.post('/v1/resetpass', controller.resetPassword);
    }
}