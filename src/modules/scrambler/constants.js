export const SCRAMBLE_LENGTH_LIMIT = 25;
// The six faces of a 3×3 Rubik's Cube
export const FACES = ['R', 'L', 'U', 'D', 'F', 'B'];
// Possible move modifiers: clockwise, counter-clockwise, and 180°
export const MODIFIERS = ['', "'", '2'];
// Map each face to its rotation axis for filtering
export const AXIS_MAP = {
  R: 'RL',
  L: 'RL',
  U: 'UD',
  D: 'UD',
  F: 'FB',
  B: 'FB'
};

// Build an array of all moves, each with metadata { move, face, axis }
// e.g. { move: "R'", face: "R", axis: "RL" }
export const movesWithMeta = FACES.flatMap(face =>
  MODIFIERS.map(mod => ({
    move: face + mod,
    face,
    axis: AXIS_MAP[face]
  }))
);
