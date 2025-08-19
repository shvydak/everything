import dotenv from 'dotenv';
import { ServerConfig, DatabaseConfig, RedisConfig } from '@/types';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = [
  'PORT',
  'MONGODB_URI',
  'REDIS_URL',
  'JWT_SECRET',
  'CORS_ORIGIN'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Server configuration
export const serverConfig: ServerConfig = {
  port: parseInt(process.env['PORT'] || '3001', 10),
  nodeEnv: process.env['NODE_ENV'] || 'development',
  corsOrigin: process.env['CORS_ORIGIN'] || 'http://localhost:3000',
  jwtSecret: process.env['JWT_SECRET']!,
  jwtExpiresIn: process.env['JWT_EXPIRES_IN'] || '7d',
};

// Database configuration
export const databaseConfig: DatabaseConfig = {
  uri: process.env['MONGODB_URI']!,
  options: {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  },
};

// Redis configuration
export const redisConfig: RedisConfig = {
  url: process.env['REDIS_URL']!,
  password: process.env['REDIS_PASSWORD'],
  retryDelayOnFailover: 100,
  maxRetriesPerRequest: 3,
};

// Rate limiting configuration
export const rateLimitConfig = {
  windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '900000', 10), // 15 minutes
  max: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100', 10), // limit each IP to 100 requests per windowMs
};

// Logging configuration
export const loggingConfig = {
  level: process.env['LOG_LEVEL'] || 'info',
};

// Export all configurations
export const config = {
  server: serverConfig,
  database: databaseConfig,
  redis: redisConfig,
  rateLimit: rateLimitConfig,
  logging: loggingConfig,
};

export default config;
