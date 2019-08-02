import * as config from '../config/config.json'
import * as crypto from 'crypto-js'
import { Types } from "mongoose";
import { AccountDB } from '../controllers/account-db-controller';
import { ENV } from '../db/db-enums';

export  class BaseController {
    protected DB: typeof AccountDB
    protected secret: string;
    protected isProd: boolean;
    
    constructor() {
        this.DB = AccountDB;
        this.secret = config.secret;
        this.isProd = process.env.NODE_ENV === ENV.PROD;
    }

    private convertToTarget<T>(target: Object) : T {
        return <T>target;
    }

    protected convertToSchemaType<P, O>(target: Object): O {
        const _primary = this.convertToTarget<P>(target);
        const _output = this.convertToTarget<O>(_primary);

        return _output;
    }

    protected encryptData(data: string): string {
        var _data = crypto.AES.encrypt(data, config.transportSecret);
        return  this.isProd ? _data.toString() : data;
    }

    protected decryptData(data: string): string {
        var _data = crypto.AES.decrypt(data, config.transportSecret);
        var _plaintext = _data.toString(crypto.enc.Utf8);
        return this.isProd ? _plaintext : data;
    }

    protected mongoIdObject(data: string) {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();