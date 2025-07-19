import { describe, it, expect } from 'vitest';

import { generateScramble } from './generateScramble.js';
import {
  SCRAMBLE_LENGTH_LIMIT,
  FACES,
  MODIFIERS,
  AXIS_MAP,
  movesWithMeta
} from './constants.js';

describe('generateScramble', () => {
  it('should generate a scramble with default length', () => {
    const scramble = generateScramble();

    expect(scramble).toBeTypeOf('string');
    expect(scramble.length).toBeGreaterThan(0);

    // Split by spaces to count moves
    const moves = scramble.split(' ');
    expect(moves).toHaveLength(SCRAMBLE_LENGTH_LIMIT); // Use constant instead of hardcoded value
  });

  it('should generate a scramble with custom length', () => {
    const customLength = 10;
    const scramble = generateScramble(customLength);

    const moves = scramble.split(' ');
    expect(moves).toHaveLength(customLength);
  });

  it('should generate valid moves only', () => {
    const scramble = generateScramble(5);
    const moves = scramble.split(' ');

    // Generate valid moves from constants instead of hardcoding
    const validMoves = movesWithMeta.map(({ move }) => move);

    moves.forEach(move => {
      expect(validMoves).toContain(move);
    });
  });

  it('should not have consecutive moves on same face', () => {
    const scramble = generateScramble(10);
    const moves = scramble.split(' ');

    for (let i = 0; i < moves.length - 1; i++) {
      const currentFace = moves[i][0]; // First character is the face
      const nextFace = moves[i + 1][0];

      expect(currentFace).not.toBe(nextFace);
    }
  });

  it('should not have consecutive moves on same axis', () => {
    const scramble = generateScramble(10);
    const moves = scramble.split(' ');

    for (let i = 0; i < moves.length - 1; i++) {
      const currentFace = moves[i][0];
      const nextFace = moves[i + 1][0];

      const currentAxis = AXIS_MAP[currentFace]; // Use constant instead of hardcoded object
      const nextAxis = AXIS_MAP[nextFace];

      expect(currentAxis).not.toBe(nextAxis);
    }
  });

  it('should generate different scrambles on multiple calls', () => {
    const scramble1 = generateScramble(5);
    const scramble2 = generateScramble(5);

    expect(scramble1).not.toBe(scramble2);
  });

  it('should use all available faces and modifiers', () => {
    const scramble = generateScramble(50); // Generate longer scramble to test variety
    const moves = scramble.split(' ');

    // Check that all faces are used
    const usedFaces = [...new Set(moves.map(move => move[0]))];
    expect(usedFaces.sort()).toEqual(FACES.sort());

    // Check that all modifiers are used
    const usedModifiers = [...new Set(moves.map(move => move.slice(1)))];
    expect(usedModifiers.sort()).toEqual(MODIFIERS.sort());
  });
});
