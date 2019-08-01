import controller from '../controllers/valid-client-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class ValidClientRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/client', controller.getAll);
        router.get('/v1/admin/client/:id', controller.getOne);
        router.post('/v1/admin/client', controller.create);
        router.put('/v1/admin/client/:id', controller.update);
        router.delete('/v1/admin/client/:id', controller.deactivate);
    }
}