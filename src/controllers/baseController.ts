import * as transportConfig from '../config/transport.config.json'
import * as crypto from 'crypto-js'
import {Types} from "mongoose";


export  class BaseController {
    constructor() {
    }

    protected encryptData(data: string): string {
        var _data = crypto.AES.encrypt(data, transportConfig.transportSecret);
        return _data.toString();
    }

    protected decryptData(data: string): string {
        var _data = crypto.AES.decrypt(data, transportConfig.transportSecret);
        var _plaintext = _data.toString(crypto.enc.Utf8);
        return _plaintext;
    }

    protected mongoIdObject(data: string) {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();