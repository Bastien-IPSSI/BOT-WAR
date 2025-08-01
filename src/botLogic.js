import { getBotState } from './stateStore.js';

export async function decideMove() {
  const state = await getBotState();

  if (state.manualMode) {
    return {
      move: state.move || "UP",
      action: state.action || "COLLECT"
    };
  }

  return defaultMove();
}

function defaultMove() {
  const directions = ["UP", "DOWN", "LEFT", "RIGHT"];
  return {
    move: directions[Math.floor(Math.random() * directions.length)],
    action: 'COLLECT'
  };
}
