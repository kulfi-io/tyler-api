import { BaseRoute } from "./base-router";
import { Router} from "express";
import controller from "../controllers/login-controller";

export class LoginRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.post('/v1/login', controller.login);
        // router.post('/v1/reset', controller.resetPassword);
        router.post('/v1/verify', controller.verifyUser);
    }
}