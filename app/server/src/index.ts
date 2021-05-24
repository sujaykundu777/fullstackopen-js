// transpile all require statements using babel
require("@babel/register")({extensions: ['.js', '.ts']}); // tslint:disable-line

import * as Server from './app';
const server = new Server.App('development', 3001);

export default server;