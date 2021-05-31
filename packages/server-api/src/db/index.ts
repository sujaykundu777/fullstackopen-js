import mongoose from 'mongoose';
import { mongodbConfig } from '../env';
import logger from '../lib';

// Build the Mongodb connection string
// const dbURI = `mongodb://${mongodbConfig.user}:${mongodbConfig.password}@${mongodbConfig.host}:${mongodbConfig.port}/${mongodbConfig.name}`;
const localdbURI = `mongodb://${mongodbConfig.host}:${mongodbConfig.port}/${mongodbConfig.name}`;

const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, // Maintain up to 10 socket connections
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

logger.debug(localdbURI);

// create the db connection object
mongoose
  .connect(localdbURI, dbOptions)
  .then(() => {
    logger.info('Mongodb connected successfully');
  })
  .catch((e) => {
    logger.info('Mongodb Connection Error');
    logger.error(e);
  });

// Connection events
mongoose.connection.on('connected', () => {
  logger.info(`Mongoose default connection open to ${localdbURI}`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  logger.error(`Mongoose default connection error${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.info('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
