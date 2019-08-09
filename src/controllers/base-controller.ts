import * as config from '../config/config.json';
import * as crypto from 'crypto';
import { AccountDB } from '../controllers/account-db-controller';
import { ENV } from '../db/db-enums';
import { Types } from 'mongoose';
import { IDecoded } from '../models/model-interfaces.js';
import * as jwt from 'jsonwebtoken';

export class BaseController {
    protected DB: typeof AccountDB
    protected isProd: boolean;
    private hashType: string;
    private algorithim: string;
    private hash: crypto.Hmac;
    private key: Buffer;
    private iv: Buffer;
    private secret: string;



    constructor() {
        this.DB = AccountDB;
        this.secret = config.secret;
        this.isProd = process.env.NODE_ENV === ENV.PROD;
        this.hashType = 'sha512';
        this.algorithim = 'aes-256-gcm';

        this.hash = crypto.createHmac(this.hashType, config.secret);
        this.key = this.hash.digest().slice(0, 32);
        this.iv = Buffer.alloc(16, 0);
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

    protected decodeToken = (token: string): IDecoded | undefined  => {
        const _token = this.removeLineBreakEmailToken(token);
        let _decoded;

        try {
            _decoded = <IDecoded>(
                jwt.verify(_token, this.secret)
            );
        }
        catch {}

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

    protected encryptIV = (data: string): string => {
        const _cipher = crypto.createCipheriv(this.algorithim, this.key, this.iv);
        let _encrypted = _cipher.update(data, 'utf8', 'hex');
        let _final = _cipher.final('hex');

        return this.isProd ? _encrypted : data;
    }

    protected decryptIV = (data: string): string => {
        const _decipher = crypto.createDecipheriv(this.algorithim, this.key, this.iv);
        let _decrypted = _decipher.update(data, 'hex', 'utf8');

        return this.isProd ? _decrypted : data;
    }

    protected mongoIdObject(data: string) {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();