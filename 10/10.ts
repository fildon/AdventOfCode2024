export const solvePart1 = (inputLines: string[]) => {
  const trailMap = inputLines.map((inputLine, row) =>
    inputLine.split("").map((x, col) => ({
      row,
      col,
      val: parseInt(x),
      destinations: new Set(x === "9" ? [`${row},${col}`] : []),
    }))
  );

  for (let height = 8; height >= 0; height--) {
    for (let row = 0; row < inputLines.length; row++) {
      for (let col = 0; col < inputLines[0].length; col++) {
        const thisCell = trailMap[row][col];
        if (thisCell.val === height) {
          [
            [row + 1, col],
            [row, col + 1],
            [row - 1, col],
            [row, col - 1],
          ]
            .map(([r, c]) => trailMap[r]?.[c])
            .filter((x) => !!x)
            .filter((neighbour) => neighbour.val === height + 1)
            .forEach((neighbour) =>
              neighbour.destinations.forEach((dest) =>
                thisCell.destinations.add(dest)
              )
            );
        }
      }
    }
  }

  return trailMap
    .flatMap((trailLine) =>
      trailLine.filter((x) => x.val === 0).map((x) => x.destinations.size)
    )
    .reduce((acc, curr) => acc + curr);
};
