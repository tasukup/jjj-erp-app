// backend/src/db.ts
import knex from 'knex';
import knexConfig from '../knexfile';

const env = process.env.NODE_ENV || 'development';

// knexfile.ts 側で `export default { development: { ... } }` の形を想定
export const db = knex(knexConfig[env]);
