export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .flatMap((line) => [...line.matchAll(/mul\((\d+),(\d+)\)/g)])
    // The capture groups above place the numbers at index 1 and 2 of the match result.
    .map(([_, a, b]) => parseInt(a) * parseInt(b))
    .reduce((acc, curr) => acc + curr);

export const solvePart2 = (inputLines: string[]) => {
  const input = inputLines.join("/n");
  const dos = [...input.matchAll(/do\(\)/g)].map(({ index }) => ({
    type: "do",
    index,
  }));
  const donts = [...input.matchAll(/don't\(\)/g)].map(({ index }) => ({
    type: "dont",
    index,
  }));
  const commands = [...dos, ...donts].sort((a, b) => a.index - b.index);

  const matches = [...input.matchAll(/mul\((\d+),(\d+)\)/g)].filter((match) => {
    // we need to check whether a do or dont was most recent
    const mostRecentCommand = commands
      .filter((command) => command.index < match.index)
      // null coalesce to "do" since this is the assumed starting state
      .at(-1) ?? { type: "do" };

    // Include this match only if the most recent command was a "do"
    return mostRecentCommand.type === "do";
  });

  return matches
    .map(([_, a, b]) => parseInt(a) * parseInt(b))
    .reduce((acc, curr) => acc + curr);
};
