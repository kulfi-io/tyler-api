import * as express from 'express'
import * as cors from 'cors';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { IndexRoute } from './routes/indexRouter';
import { ValidateRequest } from './middleware/validateRequest';
import { LoginRoute } from './routes/loginRouter';
import { UserTypeRoute } from './routes/userTypeRouter';
import { UserRoute } from './routes/userRouter';
import { ValidClientRoute } from './routes/validClientRouter';
import { ServiceRoute } from './routes/serviceRoute';
import { DurationRoute } from './routes/durationRouter';
import { ClientInfoRoute } from './routes/clientInfoRouter';
import { MailRoute } from './routes/mailRouter';

export class App {
  private server: express.Application;
  
  constructor() {
    process.title = "tyler-api";
    this.server = express();
    this.configureMiddleware();
    this.routes();
  }

  private configureMiddleware() {
    this.server.use(logger('dev'));
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json()); 
    this.server.use(helmet());
    this.server.disable('x-powered-by');
    this.server.all('/*', cors());
    this.server.all('/v1/*', ValidateRequest.validate);
  }

  private routes() {
    
    const router = express.Router();

    ClientInfoRoute.map(router);
    IndexRoute.map(router);
    MailRoute.map(router);
    LoginRoute.map(router);
    UserRoute.map(router);
    UserTypeRoute.map(router);
    ValidClientRoute.map(router);
    ServiceRoute.map(router);
    DurationRoute.map(router);
    
    this.server.use(router);
    
  }

  public run(port: number, host: string) {
    this.server.listen(port, host, () => {
      console.log(`listening on port: ${port}`);
    });
  }

}

export default new App();