import {
    Document,
    model,
    Model,
    Schema,
    Types
} from 'mongoose';

declare interface IAccountNoteSchema extends Document {
    id: string;
    userId: Types.ObjectId;
    title: string;
    note: string;
    active: boolean;
}

export interface IAccountNoteModel extends Model<IAccountNoteSchema> { }

export class AccountNoteSchema {
    private _model: Model<IAccountNoteSchema>

    constructor() {
        const schema = new Schema({
            id: {
                type: String,
                index: true,
                required: [true, "is required"]
            },
            userId: {
                type: Types.ObjectId,
                required: true,
                index: true,
                ref: 'User',
            },
            title: {
                type: String,
                required: [true, "is required"],
                lowercase: true,
                unique: true
            },
            note: {
                type: String,
                required: [true, "is required"]
            },
            active: {
                type: Boolean,
                retuired: true,
                required: [true, "is required"]
            }
        },
            { timestamps: true }
        );

        this._model = model<IAccountNoteSchema>('AccountNotes', schema);
    }

    public get model(): Model<IAccountNoteSchema> {
        return this._model
    }
}