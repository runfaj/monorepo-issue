import { FastifyInstance } from 'fastify';
import { DbServiceV1User } from 'shared-types/dbService/v1/user.js';
import { PromiseDelay } from 'shared-utils/promise.js';

async function routes(api: FastifyInstance) {
  api.get('/', async () => {
    return { id: 1, firstName: 'Stuart', lastName: 'Roskelley' };
  })

  api.get('/:id', async function (req) {
    const { id } = req.params as { id: number };

    // for testing loaders
    await PromiseDelay(3000);

    const client = await api.pg.connect();
    const { rows } = await client.query<DbServiceV1User>(`
      SELECT
        id,
        firstname,
        lastname
      FROM users
      WHERE id=$1
    `, [id]);
    client.release(); // not sure if this is necessary

    return rows[0];
  });
}

export default routes;