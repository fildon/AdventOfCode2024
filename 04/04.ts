/**
 * The 8 unit vectors. 4 cardinals + 4 diagonals.
 */
const directions = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const isXMAS = (
  wordSearch: string[],
  [x, y]: [number, number],
  [dx, dy]: (typeof directions)[number]
) => {
  if (wordSearch[y]?.[x] !== "X") return false;
  if (wordSearch[y + dy]?.[x + dx] !== "M") return false;
  if (wordSearch[y + dy + dy]?.[x + dx + dx] !== "A") return false;
  if (wordSearch[y + dy + dy + dy]?.[x + dx + dx + dx] !== "S") return false;
  return true;
};

const scoreCell = (wordSearch: string[], location: [number, number]) =>
  directions.filter((dir) => isXMAS(wordSearch, location, dir)).length;

export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .flatMap((inputLine, y) =>
      [...inputLine].map((_, x) => scoreCell(inputLines, [x, y]))
    )
    .reduce((acc, curr) => acc + curr);
