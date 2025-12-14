import { NextResponse } from 'next/server';
import Redis from 'ioredis';

// Mock fallback for local dev
let mockCount = 12543;

export const revalidate = 0;

export async function GET() {
  try {
    if (process.env.REDIS_URL) {
      // Create a transient client to avoid hot-reload connection leaks in dev
      // In production/serverless, this is acceptable as lambda containers freeze/recycle
      const redis = new Redis(process.env.REDIS_URL);
      console.log('✅ Connecting to Redis via REDIS_URL...');

      const count = await redis.get('page_visits:home');

      // Always quit to disconnect cleanly in serverless context
      await redis.quit();

      console.log('✅ Redis Count:', count);
      return NextResponse.json({ count: Number(count) || mockCount });
    }
    console.warn('⚠️ No REDIS_URL found. Using Mock.');
    throw new Error('No REDIS_URL');
  } catch (_error) {
    console.error('Redis Error (GET):', _error);
    // Fallback to in-memory
    console.log('Using in-memory fallback (GET)');
    return NextResponse.json({ count: mockCount });
  }
}

export async function POST() {
  try {
    if (process.env.REDIS_URL) {
      const redis = new Redis(process.env.REDIS_URL);
      const count = await redis.incr('page_visits:home');
      await redis.quit();

      return NextResponse.json({ count });
    }
    throw new Error('No REDIS_URL');
  } catch (_error) {
    mockCount++;
    return NextResponse.json({ count: mockCount });
  }
}
