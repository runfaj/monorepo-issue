import { ENV } from 'shared-constants/index.js';
import { ProcessEnv } from 'shared-types/env.js';

interface CREDS {
  DB_HOST: string | undefined,
  DB_USER: string | undefined,
  DB_DB: string | undefined,
  DB_PASSWORD: string | undefined,
}

export function getCreds(): CREDS {
  const {
    NODE_ENV = ENV.LOCAL,

    DB_HOST,
    DB_USER,
    DB_DB,
    DB_PASSWORD,

    LOCAL_DB_HOST,
    LOCAL_DB_USER,
    LOCAL_DB_DB,
    LOCAL_DB_PASSWORD,

    DEVELOPMENT_DB_HOST,
    DEVELOPMENT_DB_USER,
    DEVELOPMENT_DB_DB,
    DEVELOPMENT_DB_PASSWORD,

    STAGING_DB_HOST,
    STAGING_DB_USER,
    STAGING_DB_DB,
    STAGING_DB_PASSWORD,

    PRODUCTION_DB_HOST,
    PRODUCTION_DB_USER,
    PRODUCTION_DB_DB,
    PRODUCTION_DB_PASSWORD,
  } = process.env as ProcessEnv;

  // if generic DB variables are available, use those as priority
  if (DB_HOST) {
    return {
      DB_HOST,
      DB_USER,
      DB_DB,
      DB_PASSWORD,
    };
  }

  if (NODE_ENV === ENV.PRODUCTION) {
    return {
      DB_HOST: PRODUCTION_DB_HOST,
      DB_USER: PRODUCTION_DB_USER,
      DB_DB: PRODUCTION_DB_DB,
      DB_PASSWORD: PRODUCTION_DB_PASSWORD,
    };
  }

  if (NODE_ENV === ENV.STAGING) {
    return {
      DB_HOST: STAGING_DB_HOST,
      DB_USER: STAGING_DB_USER,
      DB_DB: STAGING_DB_DB,
      DB_PASSWORD: STAGING_DB_PASSWORD,
    };
  }

  if (NODE_ENV === ENV.DEVELOPMENT) {
    return {
      DB_HOST: DEVELOPMENT_DB_HOST,
      DB_USER: DEVELOPMENT_DB_USER,
      DB_DB: DEVELOPMENT_DB_DB,
      DB_PASSWORD: DEVELOPMENT_DB_PASSWORD,
    };
  }

  return {
    DB_HOST: LOCAL_DB_HOST,
    DB_USER: LOCAL_DB_USER,
    DB_DB: LOCAL_DB_DB,
    DB_PASSWORD: LOCAL_DB_PASSWORD,
  };
}

export function getConnectionString(): string {
  const {
    DB_HOST,
    DB_USER,
    DB_DB,
    DB_PASSWORD,
  } = getCreds();

  return `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`;  
}