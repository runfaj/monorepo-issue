import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';

import v1Routes from './routes/v1';
import { getConnectionString } from './utils/connection';

const {
  PORT = 3001,
} = process.env;

const fastify = Fastify({
  logger: true,
});

// fastify apparently even has a pretty simple migration guide https://fastify.dev/docs/latest/Guides/Database
fastify.register(fastifyPostgres, {
  connectionString: getConnectionString(),
});

fastify.register(v1Routes, { prefix: '/v1' });

fastify.listen({ port: PORT as number }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`db-service listening at ${address}`)
});