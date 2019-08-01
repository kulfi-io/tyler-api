import * as config from '../config/config.json'
import * as crypto from 'crypto-js'
import {Types} from "mongoose";
import { AccountDB } from '../controllers/account-db-controller';

export  class BaseController {
    protected DB: typeof AccountDB
    protected secret: string;
    
    constructor() {
        this.DB = AccountDB;
        this.secret = config.secret;
    }

    protected encryptData(data: string): string {
        var _data = crypto.AES.encrypt(data, config.transportSecret);
        return _data.toString();
    }

    protected decryptData(data: string): string {
        var _data = crypto.AES.decrypt(data, config.transportSecret);
        var _plaintext = _data.toString(crypto.enc.Utf8);
        return _plaintext;
    }

    protected mongoIdObject(data: string) {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();