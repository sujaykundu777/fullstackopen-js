const env = process.env.NODE_ENV || 'development';
const isDevelopment = env === 'development';

export { env, isDevelopment };
