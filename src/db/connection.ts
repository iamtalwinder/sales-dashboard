import mongoose, {Mongoose} from 'mongoose';
import { env } from '@dashboard/env';
import { logger } from '@dashboard/lib';

export interface IDatabaseConnectionCache {
  promise: Promise<Mongoose> | null,
}

const MONGODB_URI = env.MONGODB_URI;

let cached: IDatabaseConnectionCache = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { promise: null };
}

if (!cached.promise) {
  cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
    logger.info('MongoDB connected successfully');
    return mongoose;
  }).catch((err) => {
    logger.error('MongoDB connection error:', err);
    throw err;
  });
}

export const dbConnection = cached.promise;
