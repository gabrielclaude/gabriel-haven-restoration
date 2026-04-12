import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './schema';

let db: NeonHttpDatabase<typeof schema> | null = null;

if (process.env.DATABASE_URL) {
  const sql: NeonQueryFunction<false, false> = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema });
}

export { db };
