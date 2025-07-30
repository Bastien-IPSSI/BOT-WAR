import { decideMove } from '../src/botLogic.js';

test('returns valid move and action', () => {
  const result = decideMove({});
  expect(result).toHaveProperty('move');
  expect(result).toHaveProperty('action');
});
