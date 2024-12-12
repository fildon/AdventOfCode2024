export const solvePart1 = (inputLines: string[]) => {
  const gardenMap = inputLines.map((inputLine, row) =>
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
