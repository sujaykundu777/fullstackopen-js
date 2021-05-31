import dotenv from 'dotenv';

dotenv.config();

/**
 * Setting environment for development | production
 */
const env: string = process.env.NODE_ENV || 'development';

/**
 * Check if the environment is development
 */
const isDevelopment: boolean = env === 'development';

/**
 * Set the port
 */
const port = process.env.PORT || 3001;

/**
 * Set cors url
 */
const corsUrl = process.env.CORS_URL;

/**
 * Set log directory
 */
const logDirectory = process.env.LOG_DIR;

/**
 * Set mongdb details
 */
const mongodbConfig = {
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_USER_PW,
};

export { env, isDevelopment, port, corsUrl, logDirectory, mongodbConfig };
