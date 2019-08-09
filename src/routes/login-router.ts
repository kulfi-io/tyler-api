import controller from '../controllers/login-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class LoginRoute extends BaseRoute {
   
    constructor() {
        super();
    }

    public static map(router: Router) {
        router.post('/v1/login', controller.login);
        router.post('/v1/reset-request', controller.resetPasswordRequest);
        router.post('/v1/verify', controller.verifyUser);
        router.post('/v1/reset', controller.resetPassword);
    }
}