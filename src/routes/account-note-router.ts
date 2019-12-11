import controller from '../controllers/account-note-controller';
import { BaseRoute } from './base-router';
import { Router } from 'express';

export class AccountNoteRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static map(router: Router) {
        router.get('/v1/admin/account-note', controller.getAll);
        router.get('/v1/admin/account-note/:id', controller.getOne);
        router.post('/v1/admin/account-note', controller.create);
        router.put('/v1/admin/account-note', controller.update);
        router.put('/v1/admin/account-note/:id', controller.deactivate);
    }
}