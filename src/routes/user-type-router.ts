import controller from '../controllers/user-type-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class UserTypeRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/usertype', controller.getAll);
        router.get('/v1/admin/usertype/:id', controller.getOne);
        router.post('/v1/admin/usertype', controller.create);
        router.put('/v1/admin/usertype/:id', controller.update);
        router.delete('/v1/admin/usertype/:id', controller.deactivate);
    }
}