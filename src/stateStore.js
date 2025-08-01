import fs from 'fs/promises';

const FILE = './db.json';

export async function setManualMove(move, action) {
  await fs.writeFile(FILE, JSON.stringify({
    manualMode: true,
    move,
    action
  }, null, 2));
}

export async function disableManualMode() {
  await fs.writeFile(FILE, JSON.stringify({
    manualMode: false
  }, null, 2));
}

export async function getBotState() {
  try {
    const content = await fs.readFile(FILE, 'utf-8');
    return JSON.parse(content);
  } catch {
    return { manualMode: false };
  }
}
