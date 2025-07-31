import { decideMove } from '../src/botLogic.js';

test('returns valid move and action', () => {
  const mockGameState = {
    you: { id: 'test-bot', x: 1, y: 1 },
    points: [{ x: 3, y: 1 }],
    megaPoint: { x: 5, y: 5 },
  };

  const result = decideMove(mockGameState);

  expect(result).toHaveProperty('move');
  expect(result).toHaveProperty('action');
});
