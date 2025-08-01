import { decideMove } from '../src/botLogic.js';
import { setManualMove, disableManualMode } from '../src/stateStore.js';

describe('decideMove', () => {
  afterEach(async () => {
    await disableManualMode();
  });

  test('returns a default move and action in auto mode', async () => {
    const result = await decideMove();

    expect(result).toHaveProperty('move');
    expect(result).toHaveProperty('action');
    expect(["UP", "DOWN", "LEFT", "RIGHT"]).toContain(result.move);
  });

  test('returns manual move and action when manual mode is enabled', async () => {
    const manual = { move: 'LEFT', action: 'ATTACK' };
    await setManualMove(manual.move, manual.action);

    const result = await decideMove();

    expect(result).toEqual(manual);
  });
});