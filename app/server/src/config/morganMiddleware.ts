import * as morgan from 'morgan';
import { isDevelopment } from '../env';
import { logger } from '../lib';

const loggerStream: morgan.StreamOptions = {
    write: (message) =>
        logger.http(message.substring(0, message.lastIndexOf('\n')))
}

const morganMiddleware = morgan(
    ':method :url :status :res[content-length]- :response-time ms\n: query',
    { stream: loggerStream, skip: () => !isDevelopment},
)

export default morganMiddleware;