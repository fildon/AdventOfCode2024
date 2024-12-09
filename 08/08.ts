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

const findAntinodes = (
  antennas: Array<Antenna>,
  width: number,
  height: number
): Set<string> => {
  const frequencies = new Set(antennas.map(({ frequency }) => frequency));

  const antinodes = new Set<string>();
  frequencies.forEach((targetFrequency) => {
    const matchingAntennas = antennas.filter(
      ({ frequency }) => frequency === targetFrequency
    );
    const pairs: Array<[Antenna, Antenna]> = [];
    for (let i = 0; i < matchingAntennas.length; i++) {
      for (let j = 0; j < matchingAntennas.length; j++) {
        if (i === j) continue;
        pairs.push([matchingAntennas[i], matchingAntennas[j]]);
      }
    }
    pairs.forEach(([a, b]) => {
      const row = a.row + 2 * (b.row - a.row);
      const col = a.col + 2 * (b.col - a.col);
      // discard if it would fall out of bounds
      if (row >= 0 && row < height && col >= 0 && col < width) {
        antinodes.add(`${row},${col}`);
      }
    });
  });
  return antinodes;
};

export const solvePart1 = (inputLines: string[]): number => {
  const antennas = findAntennas(inputLines);
  const antinodes = findAntinodes(
    antennas,
    inputLines[0].length,
    inputLines.length
  );

  return antinodes.size;
};

export const solvePart2 = (inputLines: string[]): number => {
  const height = inputLines.length;
  const width = inputLines[0].length;
  const antennas = findAntennas(inputLines);
  const frequencies = new Set(antennas.map(({ frequency }) => frequency));

  const antinodes = new Set<string>();
  frequencies.forEach((targetFrequency) => {
    const matchingAntennas = antennas.filter(
      ({ frequency }) => frequency === targetFrequency
    );
    const pairs: Array<[Antenna, Antenna]> = [];
    for (let i = 0; i < matchingAntennas.length; i++) {
      for (let j = 0; j < matchingAntennas.length; j++) {
        if (i === j) continue;
        pairs.push([matchingAntennas[i], matchingAntennas[j]]);
      }
    }
    pairs.forEach(([a, b]) => {
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
        antinodes.add(`${pointerRow},${pointerCol}`);
        pointerRow += dRow;
        pointerCol += dCol;
      }
    });
  });

  return antinodes.size;
};
