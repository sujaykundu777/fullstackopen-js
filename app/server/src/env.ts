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

export { env, isDevelopment, port };
