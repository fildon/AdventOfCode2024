type GardenCell = { label: string; visited: boolean; row: number; col: number };

export const solvePart1 = (inputLines: string[]) => {
  const gardenMap: GardenCell[][] = inputLines.map((inputLine, row) =>
    inputLine.split("").map((label, col) => ({
      label,
      visited: false,
      row,
      col,
    }))
  );

  let result = 0;
  for (let row = 0; row < inputLines.length; row++) {
    for (let col = 0; col < inputLines[0].length; col++) {
      if (gardenMap[row][col].visited) continue;
      let regionArea = 0;
      let regionPerimeter = 0;
      const fillTask = [[row, col]];
      while (fillTask.length > 0) {
        const [thisRow, thisCol] = fillTask.pop()!;
        if (gardenMap[thisRow][thisCol].visited) continue;
        gardenMap[thisRow][thisCol].visited = true;
        regionArea++;

        // Add unvisited matching neighbours to this fillTask
        const neighbours = [
          [thisRow + 1, thisCol],
          [thisRow, thisCol + 1],
          [thisRow - 1, thisCol],
          [thisRow, thisCol - 1],
        ].map(([r, c]) => gardenMap[r]?.[c]);

        neighbours.forEach((neighbour) => {
          if (neighbour?.label !== gardenMap[thisRow][thisCol].label) {
            regionPerimeter++;
          } else {
            if (!neighbour.visited)
              fillTask.push([neighbour.row, neighbour.col]);
          }
        });
      }
      result += regionArea * regionPerimeter;
    }
  }

  return result;
};

export const solvePart2 = (inputLines: string[]) => {
  const gardenMap: GardenCell[][] = inputLines.map((inputLine, row) =>
    inputLine.split("").map((label, col) => ({
      label,
      visited: false,
      row,
      col,
    }))
  );

  let result = 0;
  for (let row = 0; row < inputLines.length; row++) {
    for (let col = 0; col < inputLines[0].length; col++) {
      if (gardenMap[row][col].visited) continue;
      let regionArea = 0;
      let regionPerimeter = 0;
      const fillTask = [[row, col]];
      while (fillTask.length > 0) {
        const [thisRow, thisCol] = fillTask.pop()!;
        if (gardenMap[thisRow][thisCol].visited) continue;
        gardenMap[thisRow][thisCol].visited = true;
        regionArea++;

        // Neighbours including diagonals
        const [ee, ne, nn, nw, ww, sw, ss, se] = [
          [thisRow, thisCol + 1],
          [thisRow - 1, thisCol + 1],
          [thisRow - 1, thisCol],
          [thisRow - 1, thisCol - 1],
          [thisRow, thisCol - 1],
          [thisRow + 1, thisCol - 1],
          [thisRow + 1, thisCol],
          [thisRow + 1, thisCol + 1],
        ].map<GardenCell | undefined>(([r, c]) => gardenMap[r]?.[c]);

        // Continue the fill task with unvisited matching neighbours
        const isMatch = (cell: GardenCell | undefined): cell is GardenCell =>
          cell?.label === gardenMap[thisRow][thisCol].label;

        // Add unvisited matches to the filltask
        [ee, nn, ww, ss]
          .filter(isMatch)
          .filter((x) => !x.visited)
          .forEach((x) => fillTask.push([x.row, x.col]));

        // NE outer corner
        if (!isMatch(nn) && !isMatch(ee)) regionPerimeter++;
        // NW outer corner
        if (!isMatch(nn) && !isMatch(ww)) regionPerimeter++;
        // SE outer corner
        if (!isMatch(ss) && !isMatch(ee)) regionPerimeter++;
        // SW outer corner
        if (!isMatch(ss) && !isMatch(ww)) regionPerimeter++;

        // NE inner corner
        if (!isMatch(ne) && isMatch(nn) && isMatch(ee)) regionPerimeter++;
        // NW inner corner
        if (!isMatch(nw) && isMatch(nn) && isMatch(ww)) regionPerimeter++;
        // SE inner corner
        if (!isMatch(se) && isMatch(ss) && isMatch(ee)) regionPerimeter++;
        // SW inner corner
        if (!isMatch(sw) && isMatch(ss) && isMatch(ww)) regionPerimeter++;
      }
      result += regionArea * regionPerimeter;
    }
  }

  return result;
};
