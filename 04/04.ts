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

const countXMASes = (wordSearch: string[], location: [number, number]) =>
  directions.filter((dir) => isXMAS(wordSearch, location, dir)).length;

export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .flatMap((inputLine, y) =>
      [...inputLine].map((_, x) => countXMASes(inputLines, [x, y]))
    )
    .reduce((acc, curr) => acc + curr);

const isCrossMAS = (wordSearch: string[], [x, y]: [number, number]) => {
  if (wordSearch[y]?.[x] !== "A") return false;

  const topLeft = wordSearch[y - 1]?.[x - 1];
  const topRight = wordSearch[y - 1]?.[x + 1];
  const bottomLeft = wordSearch[y + 1]?.[x - 1];
  const bottomRight = wordSearch[y + 1]?.[x + 1];

  const positiveDiagonal = [bottomLeft, topRight];
  const negativeDiagonal = [topLeft, bottomRight];

  if (!positiveDiagonal.includes("M")) return false;
  if (!positiveDiagonal.includes("S")) return false;
  if (!negativeDiagonal.includes("M")) return false;
  if (!negativeDiagonal.includes("S")) return false;
  return true;
};

export const solvePart2 = (inputLines: string[]) =>
  inputLines
    .map(
      (inputLine, y) =>
        [...inputLine].filter((_, x) => isCrossMAS(inputLines, [x, y])).length
    )
    .reduce((acc, curr) => acc + curr);
