import { movesWithMeta, SCRAMBLE_LENGTH_LIMIT } from './constants';

/**
 * Generates a “valid” Rubik’s Cube scramble of the given length.
 * Ensures no two consecutive moves are on the same face or the same axis.
 *
 * @param {number} length — number of moves in the scramble (default 25)
 * @returns {string} space-separated sequence of moves
 */
export function generateScramble(length = SCRAMBLE_LENGTH_LIMIT) {
  let prevFace = null;
  let prevAxis = null;

  // Create an array of the requested length, filling each slot with one valid move
  const rubikCode = Array.from({ length }, () => {
    // Filter out moves that repeat the last face or the last axis
    const valid = movesWithMeta.filter(
      ({ face, axis }) => face !== prevFace && axis !== prevAxis
    );

    // Pick a random valid move
    const { move, face, axis } =
      valid[Math.floor(Math.random() * valid.length)];

    // Update trackers for next iteration
    prevFace = face;
    prevAxis = axis;

    return move;
  });

  // Join the moves into a single string
  return rubikCode.join(' ');
}
