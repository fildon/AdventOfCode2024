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
  const input = inputLines.join("/n");
  const dos = [...input.matchAll(/do\(\)/g)].map((match) => match.index);
  const donts = [...input.matchAll(/don't\(\)/g)].map((match) => match.index);

  const matches = [...input.matchAll(/mul\((\d+),(\d+)\)/g)].filter((match) => {
    // Include this match if it is prior to any dont command
    if (match.index < donts[0]) return true;
    // Otherwise we need to check whether a do or dont was most recent
    const mostRecentDo = dos.filter((doIndex) => doIndex < match.index).at(-1);
    const mostRecentDont = donts
      .filter((dontIndex) => dontIndex < match.index)
      .at(-1);

    // We most recently saw a do command
    return mostRecentDo > mostRecentDont;
  });

  return matches
    .map(([_, a, b]) => parseInt(a) * parseInt(b))
    .reduce((acc, curr) => acc + curr);
};
