// transpile all require statements using babel
// eslint-disable-next-line import/first
import App from './app';
import { env } from './env';

// require('@babel/register')({ extensions: ['.js', '.ts'] });

const server = new App(env, 3001);

export default server;
