import { FastifyInstance } from 'fastify';
import userRoutes from './user';

async function routes(api: FastifyInstance) {
  api.register(userRoutes, { prefix: '/user' })
}

export default routes;