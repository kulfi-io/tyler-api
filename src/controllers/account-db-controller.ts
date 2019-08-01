import { connect, connection, Connection, ConnectionOptions } from 'mongoose';
import { ValidClientSchema, IValidClientModel } from '../db/valid-client-schema';
import { UserTypeSchema, IUserTypeModel } from '../db/user-type-schema';
import { UserSchema, IUserModel } from '../db/user-schema';

import ConnOptions from '../db/conn-options';
import { account } from '../config/config.json';
import { CONN } from '../db/db-enums';

declare interface IModels {
    ValidClient: IValidClientModel,
    UserType: IUserTypeModel,
    User: IUserModel
}

export class AccountDB {
    private static instance: AccountDB;
    private options: ConnectionOptions;
    private endpoint: string;

    private _db: Connection;
    private _models: IModels;

    private constructor() {

        this.options = ConnOptions;
        this.options.user = account.user;
        this.options.pass = account.pass;
        this.options.dbName = account.db
        this.endpoint = `${account.endpoint}/${account.db}`;

        connect(this.endpoint, this.options);
        this._db = connection;
        this._db.on("open", this.connected);
        this._db.on("error", this.error);

        this._models = {
            ValidClient: new ValidClientSchema().model,
            UserType: new UserTypeSchema().model,
            User: new UserSchema().model,
            // this is where we initialise all models
        }

    }

    public static get Models() {
        if (!AccountDB.instance) {
            AccountDB.instance = new AccountDB();
        }
        return AccountDB.instance._models;
    }

    private connected = () => {
        console.info(CONN.CONNECTED);
    }

    private error = () => {
        console.error(CONN.ERROR);
    }

}
