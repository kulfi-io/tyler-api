import * as config from '../config/config.json';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { AccountDB } from '../controllers/account-db-controller';
import { ENV } from '../db/db-enums';
import { IDecoded, ICryptoData } from '../models/model-interfaces.js';
import { Types } from 'mongoose';

export class BaseController {
    protected DB: typeof AccountDB
    protected isProd: boolean;
    private algorithm: string;
    private secret: string;
    private algorithmIv: string;
    private key: Buffer;
    private iv: Buffer | undefined;

    constructor() {
        this.DB = AccountDB;
        this.secret = config.secret;
        this.isProd = process.env.NODE_ENV === ENV.PROD;
        this.algorithm = 'aes192';

        this.algorithmIv = 'aes-256-cbc';
        const _key = Buffer.alloc(32);
        this.key = Buffer.concat([Buffer.from(config.secret)], _key.length)
    }

    protected correctDbMessage = (message: string): string => {

        if (message.indexOf(':taken') >= 0) {
            const _msg = message.split(':');
            _msg.splice(0, 1);

            const _filtered = _msg.toString().split(',').filter(x => x !== ' ' && x !== 'taken');
            const _stripped = `${_filtered.toString()} ${_filtered.length > 1 ? 'are' : 'is'} taken`;

            return _stripped;
        }

        return message;

    }

    protected removeLineBreakEmailToken = (token: string): string => {
        if (token) {
            // remove new line identifier from token
            // added in rendered email
            // idedentified is an {=} character
            return token.replace(/\=/g, '');
        }
        return token;
    }

    protected decodeToken = (token: string): IDecoded | undefined => {
        const _token = this.removeLineBreakEmailToken(token);
        let _decoded;

        try {
            _decoded = <IDecoded>(
                jwt.verify(_token, this.secret)
            );
        }
        catch { }

        return _decoded;
    }

    private convertToTarget<T>(target: Object): T {
        return <T>target;
    }

    protected convertToSchemaType<P, O>(target: Object): O {
        const _primary = this.convertToTarget<P>(target);
        const _output = this.convertToTarget<O>(_primary);

        return _output;
    }

    protected encrypt = (data: Object): string => {
        let encrypted = '';
        const cipher = crypto.createCipher(this.algorithm, config.secret);

        encrypted = cipher.update(data.toString(), 'utf8', 'hex');
        encrypted += cipher.final('hex');

        return this.isProd ? encrypted : data.toString();
    }

    protected encryptIv = (data: string): ICryptoData | string => {
        if(this.isProd) {
            this.iv = crypto.randomBytes(16);

            let cipher = crypto.createCipheriv(this.algorithmIv.toString(), this.key, this.iv);
            let encrypted = cipher.update(data, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return {
                iv: this.iv.toString('hex'), 
                encryptedData: encrypted
            };
    
        }

        return data;
    }

    protected decrypt(data: Object): string  {

        let decrypted = '';
        const decipher = crypto.createDecipher(this.algorithm, config.secret);
        decrypted = decipher.update(data.toString(), 'hex', 'utf8');
        decrypted += decipher.final().toString();

        return  this.isProd ? decrypted : data.toString();
    }

    protected decryptIv = (data: string): string => {
        if(this.isProd) {
            const _stringifiedData = JSON.stringify(data);
            const _data = <ICryptoData>JSON.parse(_stringifiedData);

            let iv = Buffer.from(_data.iv, 'hex');
            let decipher = crypto.createDecipheriv(this.algorithmIv, this.key, iv);
    
            let decrypted = decipher.update(_data.encryptedData, 'hex', 'utf8');
            decrypted += decipher.final('utf8'); 
            return decrypted;
    
        } 

        return data;
    }


    protected mongoIdObjectToString(data: Types.ObjectId): string {
        var _id = <Object>data;
        return _id.toString();
    }

    protected mongoIdObject(data: string): Types.ObjectId {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();