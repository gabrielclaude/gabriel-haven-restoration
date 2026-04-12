import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './schema';

let db: NeonHttpDatabase<typeof schema> | null = null;

if (process.env.DATABASE_URL) {
  const connectionString = process.env.DATABASE_URL.trim();
  const sql: NeonQueryFunction<false, false> = neon(connectionString);
  db = drizzle(sql, { schema });
}

export { db };
