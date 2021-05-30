import fs from 'fs';
import path from 'path';
import * as winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { logDirectory } from '../env';

// check if log dir is present
let dir = logDirectory;
if (!dir) dir = path.resolve('logs');

// create a log directory if it is not present
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  verbose: 'gray',
  debug: 'blue',
  silly: 'grey',
};

const logLevel = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const options = {
  file: {
    level: logLevel(),
    filename: `${dir}/%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: '20m',
    colorize: true,
    maxFiles: '14d',
  },
};

winston.addColors(colors);

const winstonFormat = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: '[LOGGER]',
  }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.align(),
  winston.format.errors({ stack: true }),
  winston.format.prettyPrint(),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const winstonLogger = winston.createLogger({
  level: logLevel(),
  levels,
  format: winstonFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/all.log' }),
  ],
  exceptionHandlers: [new DailyRotateFile(options.file)],
  exitOnError: false, // donot exit on handled exceptions
});

export default winstonLogger;
