import * as uuid from 'uuid';
import AccountNote from '../models/account-note';
import { BaseController } from './base-controller';
import { IAccountNote } from '../models/model-interfaces';
import { IAccountNoteModel } from '../db/account-note-schema';
import { Request, Response } from 'express';
import { MEETINGNOTE } from '../db/db-enums';

export class AccountNoteController extends BaseController {
    private model: IAccountNoteModel

    constructor() {
        super();
        this.model = this.DB.Models.AccountNote
    }

    private mapItems(model: IAccountNote[]): AccountNote[] {

        let _data = [];
        for (let i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;

    }

    private mapItem(model: IAccountNote): AccountNote {

        const _data = new AccountNote();
        _data.note = this.encryptIv(model.note.toString());
        _data.title = this.encryptIv(model.title.toString());
        _data.id = this.encryptIv(model.id.toString());
        _data.userId = this.encryptIv(model.userId.toString());

        return _data;

    }

    getAll = (req: Request, res: Response) => {

        this.model.find({ active: true }, (err, data: IAccountNote[]) => {
            if (err) return res.status(500).send({ message: err.message });
            const _data = this.mapItems(data);
            return res.status(200).send(_data);
        });

    };

    getOne = (req: Request, res: Response) => {

        if (!req.params || !req.params.id) {
            return res.status(400).send({ message: MEETINGNOTE.INVALID_IDENTIFIER });
        }

        this.model.findById(req.params.id, (err, data: IAccountNote) => {
            if (err) return res.status(500).send({ message: err.message });
            const _data = this.mapItem(data);
            return res.status(200).send(_data);
        });

    };

    create = (req: Request, res: Response) => {

        if (!req.body || !req.body.title || !req.body.note || !req.body.userId) {
            return res.status(400).send({ message: MEETINGNOTE.MISSING_REQUIRED_ITEMS });
        }

        const _model = new AccountNote();
        _model.id = uuid();
        _model.note = this.decryptIv(req.body.note);
        _model.title = this.decryptIv(req.body.title);
        _model.userId = this.decryptIv(req.body.userId)
        _model.active = true;

        this.model.create(_model, (err: Error, data: IAccountNote) => {
            if (err) return res.status(400).send({ message: err.message });
            const _data = this.mapItem(data);
            return res.status(201).send(_data);
        });

    };

    update = (req: Request, res: Response) => {

        if (!req.params || !req.params.id) {
            return res.status(400).send();
        }

        const title = req.body.title ? this.decryptIv(req.body.title) : "";
        const note = req.body.note ? this.decryptIv(req.body.note)
            : "";

        if (title.length == 0 || title.length == 0) {
            return res
                .status(400)
                .send({ message: MEETINGNOTE.TITLE_IS_MISSING_OR_NULL });
        }

        if (note.length == 0 || note.length == 0) {
            return res
                .status(400)
                .send({ message: MEETINGNOTE.NOTE_IS_MISSING_OR_NULL });
        }

        const _meetingNote = {
            title: title,
            note: note
        };

        this.model.findByIdAndUpdate(req.params.id, _meetingNote, (err: Error) => {
            if (err) return res.status(400).send({ message: err.message });
            return res.status(200).send();
        });

    };

    deactivate = (req: Request, res: Response) => {

        if (!req.params || !req.params.id) {
            return res.status(400).send();
        }

        this.model.findByIdAndUpdate(
            req.params.id,
            { active: false },
            (err: Error) => {
                if (err) return res.status(400).send({ message: err.message });
                return res.status(204).send();
            }
        );
    };
}

export default new AccountNoteController();
