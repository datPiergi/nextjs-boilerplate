import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import { edgeConfigService } from '@services/edgeConfigService';

export const config = { matcher: '/guests' };

export async function middleware() {
  const greeting = await edgeConfigService.getValue('greeting');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(greeting);
}