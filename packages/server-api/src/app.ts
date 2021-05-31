import chalk from 'chalk';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import * as path from 'path';
import morganMiddleware from './config';
import './db';
import { corsUrl, env, port } from './env';
import logger from './lib';
import todoRouter from './routes/todo';

export default class App {
  protected app: Application;

  constructor(NODE_ENV = env, PORT = port) {
    /**
     * Create our app w/ express
     */
    this.app = express();

    if (NODE_ENV === 'development') {
      // if dev
      this.app.use(express.static(path.join(process.cwd(), 'public')));
    } else {
      // if prod (TODO)
      this.app.use(express.static(path.join(process.cwd(), 'dist'), { maxAge: '7d' })); // set the static files location /public/img will be /img for users
    }

    /**
     * parse application/x-www-form-urlencoded
     */
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    );

    /**
     * parse application/json
     */
    this.app.use(express.json());

    /**
     * parse application/vnd.api+json as json
     */
    this.app.use(
      express.json({
        type: 'application/vnd.api+json',
      }),
    );

    /**
     * CORS
     */
    this.app.use(
      cors({
        origin: corsUrl,
        optionsSuccessStatus: 200,
      }),
    );

    /**
     * use morgan
     */
    this.app.use(morganMiddleware);

    /**
     * init route
     */
    this.app.get('/api/v1', (req: Request, res: Response) => {
      res.status(200).send({
        success: true,
        message: 'You hit Backend API Server again... !',
      });
    });

    /**
     * use routes
     */
    this.app.use(todoRouter);

    /**
     * Start the server
     */
    this.app.listen(process.env.PORT, () => {
      // console.log('The server is running in port localhost : ', process.env.PORT); // tslint:disable-line
      logger.info(chalk.yellowBright(`The server is running at localhost : http://localhost:${PORT}`));
    });
  }
}
