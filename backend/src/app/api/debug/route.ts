import { NextResponse } from 'next/server';
import configPromise from '@/payload.config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';

export async function GET() {
  const result: Record<string, any> = {
    env: {
      hasDatabaseUri: Boolean(process.env.DATABASE_URI),
      databaseUriPrefix: process.env.DATABASE_URI ? process.env.DATABASE_URI.split('@')[1] : null,
      hasPayloadSecret: Boolean(process.env.PAYLOAD_SECRET),
      serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || null,
      vercelUrl: process.env.VERCEL_URL || null,
      vercelProjectProductionUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL || null,
    },
  };

  try {
    const payload = await getPayload({ config: configPromise });
    result.payloadInitialized = true;
    result.collections = Object.keys(payload.collections);

    const users = await payload.find({
      collection: 'users',
      limit: 1,
    });
    result.userQuerySuccess = true;
    result.userCount = users.totalDocs;
  } catch (error: any) {
    result.error = {
      message: error?.message || String(error),
      stack: error?.stack || null,
    };
  }

  return NextResponse.json(result);
}
