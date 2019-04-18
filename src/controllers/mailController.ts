import { BaseController } from "./baseController";
import * as path from 'path';
import * as emailTemplate from 'email-templates';
import * as mailer from 'nodemailer';
import * as ejs from 'ejs';
import { Request, Response } from "express";

const mail = require('mail');

export class MailController extends BaseController {
    transporter: typeof mail;
    constructor() {
        super();
        this.transporter = mailer.createTransport({
            service: 'GMAIL',
            auth: {
                user: 'kulfiapp@gmail.com',
                pass: '@2Terravista'
            }
        });
    }
    
    send = (req:Request, res: Response) => {
        var _result = this.sendMail();

        if( typeof _result === "boolean") {
            if(_result)
                return res.status(200).send({message: 'sent email'});
            else
                return res.status(400).send({message: 'send email failed'});
        } 

        if( typeof _result === typeof Error) {
            return res.status(400).send({message: _result.message})
        }

        return res.status(444).send({message: 'type check failed'}); 
    };

    private sendMail(): boolean | Error {
        
        const _tempDir = path.join(__dirname, '../email-templates', 'greetings.html')
        try {

            let _email= new emailTemplate({
                message: {
                    from: 'kulfiapp@gmail.com'
                },
                transport: this.transporter,
                views: {
                    options: {
                        extension: 'ejs'
                    }
                }
            });
    
    
            const _locals = {
                userName: 'Tester-Ashish'
            }

           
            let _html = ejs.render(_tempDir, _locals);
            _email.juiceResources(_html)
            .then(console.log)
            .catch(console.error);

            
            
    
            // let _options = {
            //     template: _tempDir,
            //     message: {
            //         to: 'ashish@ashishc.io',
            //         subject: 'template test',
            //         html: ejs.renderFile(_tempDir, _locals)
            //     },
            //     locals: {
            //         userName: 'tester-user'
            //     }
            // }
            // _email.send(_options)
            // .then(console.log)
            // .catch(console.error);

    
            return true
        }
        catch(err) {
            return err;
        }
        
        
    }
}

export default new MailController();

