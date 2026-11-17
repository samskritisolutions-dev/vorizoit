import { postgresAdapter } from '@payloadcms/db-postgres';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import { Faqs } from './collections/Faqs';
import { Industries } from './collections/Industries';
import { Jobs } from './collections/Jobs';
import { Services } from './collections/Services';
import { Testimonials } from './collections/Testimonials';
import { Users } from './collections/Users';
import { SiteSettings } from './globals/SiteSettings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUri =
  process.env.DATABASE_URI ||
  'postgresql://postgres.lytvmfjwlszazxwdqbcc:b5SRRp6Q2R6qgKve@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres';

const isPostgres =
  databaseUri.startsWith('postgres://') ||
  databaseUri.startsWith('postgresql://');

const getServerURL = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NEXT_PUBLIC_SERVER_URL) return process.env.NEXT_PUBLIC_SERVER_URL;
  return 'http://localhost:3001';
};

export default buildConfig({
  serverURL: getServerURL(),
  cors: [
    getServerURL(),
    'http://localhost:3000',
    'http://localhost:3001',
    'https://vorizoit.vercel.app',
    'https://vorizoit-backend.vercel.app',
    'https://vorizo-backend.vercel.app',
    'https://vorizoit.com',
    'https://www.vorizoit.com',
  ],
  csrf: [
    getServerURL(),
    'http://localhost:3000',
    'http://localhost:3001',
    'https://vorizoit.vercel.app',
    'https://vorizoit-backend.vercel.app',
    'https://vorizo-backend.vercel.app',
    'https://vorizoit.com',
    'https://www.vorizoit.com',
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    suppressHydrationWarning: true,
  },
  collections: [Users, Testimonials, Jobs, Services, Industries, Faqs],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret:
    process.env.PAYLOAD_SECRET ||
    '9f8b4a72d1e0c3b5a8f7e6d5c4b3a291f0e9d8c7b6a5',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseUri,
          ssl:
            databaseUri.includes('supabase.co') ||
            databaseUri.includes('pooler.supabase.com')
              ? { rejectUnauthorized: false }
              : undefined,
          connectionTimeoutMillis: 10000,
          idleTimeoutMillis: 10000,
          max: 10,
        },
        push: false,
      })
    : sqliteAdapter({
        client: {
          url: databaseUri,
        },
      }),
});
