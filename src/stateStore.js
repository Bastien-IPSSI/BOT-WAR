import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redis = new Redis(process.env.REDIS_URL);

export async function setManualMove(move, action) {
  await redis.set('manualMode', 'true');
  await redis.set('move', move);
  await redis.set('action', action);
}

export async function disableManualMode() {
  await redis.set('manualMode', 'false');
}

export async function getBotState() {
  const manualMode = await redis.get('manualMode');
  const move = await redis.get('move');
  const action = await redis.get('action');

  return {
    manualMode: manualMode === 'true',
    move: move || 'UP',
    action: action || 'COLLECT',
  };
}