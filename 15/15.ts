class Vector {
  constructor(public readonly row: number, public readonly col: number) {}
  add(other: Vector): Vector {
    return new Vector(this.row + other.row, this.col + other.col);
  }
}

class Warehouse {
  private grid: string[][];
  private height: number;
  private width: number;
  constructor(warehouseLines: string[]) {
    this.height = warehouseLines.length;
    this.width = warehouseLines[0].length;
    this.grid = warehouseLines.map((line) => line.split(""));
  }
  getRobot(): Vector {
    let row = NaN;
    let col = NaN;
    this.grid.forEach((gridRow, r) =>
      gridRow.forEach((gridCell, c) => {
        if (gridCell === "@") {
          row = r;
          col = c;
        }
      })
    );
    if (isNaN(row) || isNaN(col)) throw new Error("Robot's gone missing!");
    return new Vector(row, col);
  }
  doInstruction(instruction: string) {
    const robot = this.getRobot();
    const directionVectorMap: Record<string, Vector> = {
      ">": new Vector(0, 1),
      "^": new Vector(-1, 0),
      "<": new Vector(0, -1),
      v: new Vector(1, 0),
    };
    const directionVector = directionVectorMap[instruction];
    if (directionVector === undefined)
      throw new Error(`Unrecognised instruction: ${instruction}`);

    const desiredRobotLocation = robot.add(directionVector);
    let pointer = robot.add(directionVector);
    while (true) {
      const currentCell = this.grid[pointer.row][pointer.col];
      if (currentCell === "#") {
        // We are blocked by a wall
        break;
      }
      if (currentCell === ".") {
        // - fill the target cell with a block
        this.grid[pointer.row][pointer.col] = "O";
        // - fill the origin cell with... empty?
        this.grid[robot.row][robot.col] = ".";
        // - update robot location by one
        this.grid[desiredRobotLocation.row][desiredRobotLocation.col] = "@";
        break;
      }
      pointer = pointer.add(directionVector);
    }

    return this;
  }
  debug() {
    this.grid.forEach((line) => console.log(line.join("")));
  }
  gpsScore(): number {
    let score = 0;
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.grid[row][col] === "O") score += 100 * row + col;
      }
    }
    return score;
  }
}

export const solvePart1 = (inputLines: string[]) => {
  const emptyLine = inputLines.indexOf("");
  const warehouseLines = inputLines.slice(0, emptyLine);
  const instructionLines = inputLines.slice(emptyLine + 1);
  const instructions = instructionLines.join("").split("");

  const warehouse = new Warehouse(warehouseLines);

  for (let instruction of instructions) {
    warehouse.doInstruction(instruction);
  }

  return warehouse.gpsScore();
};
