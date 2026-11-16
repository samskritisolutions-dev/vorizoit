import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { postgresAdapter } from '@payloadcms/db-postgres';
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
import { seedInitialContent } from './lib/seed';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUri = process.env.DATABASE_URI || 'file:./vorizo.db';
const isPostgres =
  databaseUri.startsWith('postgres://') ||
  databaseUri.startsWith('postgresql://');

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    suppressHydrationWarning: true,
  },
  async onInit(payload) {
    await seedInitialContent(payload);
  },
  collections: [Users, Testimonials, Jobs, Services, Industries, Faqs],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret:
    process.env.PAYLOAD_SECRET ||
    'f3b1456d98c249a0b12e4d56789abcdef0123456789abcdef0123456789abcdef',
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
        },
      })
    : sqliteAdapter({
        client: {
          url: databaseUri,
        },
      }),
});
