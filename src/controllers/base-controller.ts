import * as config from '../config/config.json';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { AccountDB } from '../controllers/account-db-controller';
import { ENV } from '../db/db-enums';
import { IDecoded } from '../models/model-interfaces.js';
import { Types } from 'mongoose';

export class BaseController {
    protected DB: typeof AccountDB
    protected isProd: boolean;
    private algorithm: string;
    private secret: string;

    constructor() {
        this.DB = AccountDB;
        this.secret = config.secret;
        this.isProd = process.env.NODE_ENV === ENV.PROD;
        this.algorithm = 'aes192';
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

    protected encrypt = (data: string): string => {

        const cipher = crypto.createCipher(this.algorithm, this.secret);

        let encrypted = '';
        cipher.on('readable', () => {
            const data = cipher.read();
            if (data)
                encrypted += data.toString('hex');
        });
        cipher.on('end', () => {
            console.log(encrypted);
        });

        cipher.write(data);
        cipher.end();

        return this.isProd ? encrypted : data;
    }

    protected decrypt = (data: string): string => {
        const decipher = crypto.createDecipher(this.algorithm, this.secret);

        let decrypted = '';
        decipher.on('readable', () => {
            const data = decipher.read();
            if (data)
                decrypted += data.toString('utf8');
        });
        decipher.on('end', () => {
            console.log(decrypted);
            // Prints: some clear text data
        });

        decipher.write(data, 'hex');
        decipher.end();

        return this.isProd ? decrypted : data;
    }


    protected mongoIdObject(data: string) {
        var _id = Types.ObjectId(data);
        return _id;
    }
}

export default new BaseController();