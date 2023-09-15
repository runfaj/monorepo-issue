export enum ENV {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  TEST = 'test',
}

declare interface ProcessEnv {
  [key: string]: string | undefined,
  NODE_ENV: ENV
}