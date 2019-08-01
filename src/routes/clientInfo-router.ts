import controller from '../controllers/client-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class ClientInfoRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/clientinfo', controller.getAll);
    }
}