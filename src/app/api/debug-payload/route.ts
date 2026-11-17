import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const rawUri = process.env.DATABASE_URI || '';
  const match = rawUri.match(/:([^:@]+)@/);
  const password = match ? match[1] : '';

  try {
    const payload = await getPayload({ config: configPromise });
    const userCount = await payload.count({ collection: 'users' });

    return NextResponse.json({
      status: 'ok',
      hasSecret: Boolean(process.env.PAYLOAD_SECRET),
      userCount,
      dbInfo: {
        host: rawUri.split('@')[1]?.split('/')[0] || '',
        user: rawUri.split('://')[1]?.split(':')[0] || '',
        passwordLength: password.length,
        passwordPreview: `${password.slice(0, 2)}...${password.slice(-2)}`,
      },
    });
  } catch (err: unknown) {
    const error = err as Error & { cause?: unknown };

    return NextResponse.json(
      {
        status: 'error',
        name: error.name,
        message: error.message,
        cause: error.cause,
        dbInfo: {
          host: rawUri.split('@')[1]?.split('/')[0] || '',
          user: rawUri.split('://')[1]?.split(':')[0] || '',
          passwordLength: password.length,
          passwordPreview: `${password.slice(0, 2)}...${password.slice(-2)}`,
        },
        hasSecret: Boolean(process.env.PAYLOAD_SECRET),
        nodeEnv: process.env.NODE_ENV,
      },
      { status: 500 }
    );
  }
}
