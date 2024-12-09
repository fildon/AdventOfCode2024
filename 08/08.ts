type Antenna = {
  frequency: string;
  row: number;
  col: number;
};

const findAntennas = (inputLines: string[]): Array<Antenna> =>
  inputLines.flatMap((inputLine, row) =>
    inputLine
      .split("")
      .map((frequency, col) => ({ frequency, row, col }))
      .filter(({ frequency }) => frequency !== ".")
  );

export const solvePart1 = (inputLines: string[]): number => {
  const height = inputLines.length;
  const width = inputLines[0].length;
  const antennas = findAntennas(inputLines);
  const pairs = antennas.flatMap((a, i) =>
    antennas
      // Don't match an antenna to itself
      .filter((_, j) => i !== j)
      // Match only with common frequencies
      .filter((b) => a.frequency === b.frequency)
      // Produce the pair
      .map((b) => [a, b])
  );

  const antinodes = pairs
    .map(([a, b]) => ({
      row: a.row + 2 * (b.row - a.row),
      col: a.col + 2 * (b.col - a.col),
    }))
    // Exclude antinodes that would fall out of bounds
    .filter(({ row }) => row >= 0)
    .filter(({ col }) => col >= 0)
    .filter(({ row }) => row < height)
    .filter(({ col }) => col < width);

  return new Set(antinodes.map(({ row, col }) => `${row},${col}`)).size;
};

const findAntinodesInbounds = (
  a: Antenna,
  b: Antenna,
  height: number,
  width: number
): Array<{ row: number; col: number }> => {
  const antinodes: Array<{ row: number; col: number }> = [];
  const dRow = b.row - a.row;
  const dCol = b.col - a.col;
  let pointerRow = b.row;
  let pointerCol = b.col;
  while (
    pointerRow >= 0 &&
    pointerRow < height &&
    pointerCol >= 0 &&
    pointerCol < width
  ) {
    antinodes.push({ row: pointerRow, col: pointerCol });
    pointerRow += dRow;
    pointerCol += dCol;
  }
  return antinodes;
};

export const solvePart2 = (inputLines: string[]): number => {
  const height = inputLines.length;
  const width = inputLines[0].length;
  const antennas = findAntennas(inputLines);
  const pairs = antennas.flatMap((a, i) =>
    antennas
      // Don't match an antenna to itself
      .filter((_, j) => i !== j)
      // Match only with common frequencies
      .filter((b) => a.frequency === b.frequency)
      // Produce the pair
      .map((b) => [a, b])
  );

  const antinodes = pairs.flatMap(([a, b]) =>
    findAntinodesInbounds(a, b, height, width)
  );

  return new Set(antinodes.map(({ row, col }) => `${row},${col}`)).size;
};
