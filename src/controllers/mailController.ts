import { Request, Response } from "express";
import * as Email from 'email-templates';
import * as mailer from 'nodemailer';
import * as mailConfig from '../config/mail.config.json'
const Mail = require('mail')

export class MailController {
    private transporter: typeof Mail;
    
    
    constructor() {
        
        this.transporter = mailer.createTransport({
            service: mailConfig.account.service,
            auth: {
                user: mailConfig.account.user,
                pass: mailConfig.account.pass
            }
        });
    }

    register = (req: Request, res: Response) => {
        const _email = new Email({
            message: {
                from: mailConfig.account.user
            },
            send: mailConfig.account.send,
            preview: mailConfig.account.preview,
            transport: this.transporter,
        });

        _email.send({
            template: 'register',
            message: {
                to: 'ashish@ashishc.io',
            },
            locals: {
                name: 'tester'
            }
        })
        .then((content: {}) => {
            res.status(200).send({message: content})
        })
        .catch((err: Error) => {
            res.status(400).send({message: err.message});
        });

    }

    test = (req: Request, res: Response) => {
        const _email = new Email({
            message: {
                from: mailConfig.account.user
            },
            send: mailConfig.account.send,
            preview: mailConfig.account.preview,
            transport: this.transporter,
        });

        _email.send({
            template: 'greetings',
            message: {
                to: 'ashish@ashishc.io',
            },
            locals: {
                name: 'tester'
            }
        })
        .then((content: {}) => {
            res.status(200).send({message: content})
        })
        .catch((err: Error) => {
            res.status(400).send({message: err.message});
        });

    }
}

export default new MailController();

