import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rawUri = process.env.DATABASE_URI;
    const maskedUri = rawUri
      ? rawUri.replace(/:([^:@]+)@/, ':****@')
      : 'NOT_SET';

    const payload = await getPayload({ config: configPromise });
    const userCount = await payload.count({ collection: 'users' });

    return NextResponse.json({
      status: 'ok',
      databaseUri: maskedUri,
      hasSecret: Boolean(process.env.PAYLOAD_SECRET),
      userCount,
    });
  } catch (err: unknown) {
    const error = err as Error & { cause?: unknown };
    const rawUri = process.env.DATABASE_URI;
    const maskedUri = rawUri
      ? rawUri.replace(/:([^:@]+)@/, ':****@')
      : 'NOT_SET';

    return NextResponse.json(
      {
        status: 'error',
        name: error.name,
        message: error.message,
        cause: error.cause,
        stack: error.stack,
        databaseUri: maskedUri,
        hasSecret: Boolean(process.env.PAYLOAD_SECRET),
        nodeEnv: process.env.NODE_ENV,
      },
      { status: 500 }
    );
  }
}
