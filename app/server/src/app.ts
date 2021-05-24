import * as bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';
import * as path from 'path';
import { morganMiddleware } from './config';
import { logger } from './lib';

export class App {

    protected app: express.Application

    constructor(NODE_ENV: string = 'development', PORT: any){

        /**
         * Setting environment for development | production
         */
        process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;

        /**
         * Setting port number
         */
        process.env.PORT = process.env.PORT || PORT;

        /**
         * Create our app w/ express
         */
        this.app = express();

        if(NODE_ENV ==='development'){

            // if dev
            this.app.use(express.static(path.join(process.cwd(), 'public')));

        }else{

            // if prod (TODO)
            this.app.use(express.static(path.join(process.cwd(), 'dist'), { maxAge: '7d' })); // set the static files location /public/img will be /img for users

        }

        /**
         * parse application/x-www-form-urlencoded
         */
        this.app.use(bodyParser.urlencoded({
            'extended': true
        }));


       /**
        * parse application/json
        */
       this.app.use(bodyParser.json());


       /**
        * parse application/vnd.api+json as json
        */
       this.app.use(bodyParser.json({
           type: 'application/vnd.api+json'
       }));

       /**
        * use morgan
        */
       this.app.use(morganMiddleware);

       /**
        * init reoute
        */
       this.app.get('/api/v1', (req, res) => {
           res.status(200).send({
               "success": true,
               "message": "You hit Backend API Server... !"
           });
       });

       /**
        * Start the server
        */
       this.app.listen(process.env.PORT, () => {
          // console.log('The server is running in port localhost : ', process.env.PORT); // tslint:disable-line
          logger.info(chalk.yellowBright(`The server is running in port localhost : http://localhost:${process.env.PORT}`))
       });

    }

}
