type Vector = [number, number];

/**
 * The 8 unit vectors. 4 cardinals + 4 diagonals.
 */
const directions: Vector[] = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const isXMAS = (wordSearch: string[], [x, y]: Vector, [dx, dy]: Vector) =>
  [..."XMAS"].every((char, i) => wordSearch[y + i * dy]?.[x + i * dx] === char);

const countXMASes = (wordSearch: string[], location: Vector) =>
  directions.filter((dir) => isXMAS(wordSearch, location, dir)).length;

export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .flatMap((inputLine, y) =>
      [...inputLine].map((_, x) => countXMASes(inputLines, [x, y]))
    )
    .reduce((acc, curr) => acc + curr);

const isCrossMAS = (wordSearch: string[], [x, y]: Vector) => {
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
