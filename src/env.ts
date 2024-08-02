import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export enum AppEnv {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export const env = createEnv({
  server: {
    MONGODB_URI: z.string().min(1),
    NODE_ENV: z.nativeEnum(AppEnv),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_URI: process.env.MONGODB_URI
  },
});
