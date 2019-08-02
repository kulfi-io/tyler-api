import controller from '../controllers/user-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class UserRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/user', controller.getAll);
        router.get('/v1/user/:id', controller.getOne);
        router.post('/v1/register', controller.create);
        router.put('/v1/register', controller.update);
        router.put('/v1/user/:id', controller.deactivate);
        router.delete('/v1/admin/user/:id', controller.detete);
    }
}