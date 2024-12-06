type Direction = "N" | "E" | "S" | "W";

type Guard = {
  row: number;
  col: number;
  dir: Direction;
};

const findGuard = (inputLines: string[]): Guard => {
  for (let row = 0; row < inputLines.length; row++) {
    for (let col = 0; col < inputLines[0].length; col++) {
      if (inputLines[row][col] === "^") return { row, col, dir: "N" };
    }
  }
  throw new Error("No guard found");
};

const isInMap = (map: string[], row: number, col: number) => {
  if (row < 0) return false;
  if (row >= map.length) return false;
  if (col < 0) return false;
  if (col >= map[0].length) return false;
  return true;
};

const getNextLocation = ({ dir, row, col }: Guard) => {
  switch (dir) {
    case "N":
      return { row: row - 1, col };
    case "E":
      return { row, col: col + 1 };
    case "S":
      return { row: row + 1, col };
    case "W":
      return { row, col: col - 1 };
  }
};

const turnRight = (dir: Direction): Direction => {
  if (dir === "N") return "E";
  if (dir === "E") return "S";
  if (dir === "S") return "W";
  return "N";
};

export const solvePart1 = (inputLines: string[]) => {
  const guard = findGuard(inputLines);
  const visited = new Set<string>();

  while (isInMap(inputLines, guard.row, guard.col)) {
    visited.add(`${guard.row},${guard.col}`);
    const { row, col } = getNextLocation(guard);
    if (inputLines[row]?.[col] === "#") {
      guard.dir = turnRight(guard.dir);
    } else {
      guard.row = row;
      guard.col = col;
    }
  }

  return visited.size;
};
