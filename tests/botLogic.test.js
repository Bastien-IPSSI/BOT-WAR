import { decideMove, setManualMove, disableManualMode } from '../src/botLogic.js';

describe('decideMove', () => {
  afterEach(() => {
    disableManualMode();
  });

  test('returns a default move and action in auto mode', () => {
    const result = decideMove();

    expect(result).toHaveProperty('move');
    expect(result).toHaveProperty('action');
    expect(["UP", "DOWN", "LEFT", "RIGHT"]).toContain(result.move);
  });

  test('returns manual move and action when manual mode is enabled', () => {
    const manual = { move: 'LEFT', action: 'ATTACK' };
    setManualMove(manual.move, manual.action);

    const result = decideMove();

    expect(result).toEqual(manual);
  });
});