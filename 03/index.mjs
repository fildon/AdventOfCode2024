/**
 * @param {string[]} inputLines
 */
export const solvePart1 = (inputLines) =>
  inputLines
    .flatMap((line) => [...line.matchAll(/mul\((\d+),(\d+)\)/g)])
    // The capture groups above place the numbers at index 1 and 2 of the match result.
    .map(([_, a, b]) => parseInt(a) * parseInt(b))
    .reduce((acc, curr) => acc + curr);

/**
 * @param {string[]} inputLines
 */
export const solvePart2 = (inputLines) => {
  // TODO
};
