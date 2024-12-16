class Vector {
  public readonly x: number;
  public readonly y: number;
  constructor([x, y]: [number, number]) {
    this.x = x;
    this.y = y;
  }

  static fromButtonLine(buttonLine: string): Vector {
    const [x, y] = [
      ...buttonLine.matchAll(/Button [AB]: X\+(\d+), Y\+(\d+)/g),
    ][0]
      .slice(1)
      .map((x) => parseInt(x));
    return new Vector([x, y]);
  }

  static fromPrizeLine(prizeLine: string): Vector {
    const [x, y] = [...prizeLine.matchAll(/Prize: X=(\d+), Y=(\d+)/g)][0]
      .slice(1)
      .map((x) => parseInt(x));
    return new Vector([x, y]);
  }

  toString(): string {
    return `[${this.x}, ${this.y}]`;
  }

  isMultipleOf(other: Vector): boolean {
    return (
      this.x % other.x === 0 &&
      this.y % other.y === 0 &&
      this.x / other.x === this.y / other.y
    );
  }

  add(other: Vector): Vector {
    return new Vector([this.x + other.x, this.y + other.y]);
  }

  multiply(scale: number): Vector {
    return new Vector([this.x * scale, this.y * scale]);
  }

  subtract(other: Vector): Vector {
    return new Vector([this.x - other.x, this.y - other.y]);
  }
}

class ClawMachine {
  private a: Vector;
  private b: Vector;
  private prize: Vector;
  constructor([buttonALine, buttonBLine, prizeLine]: [string, string, string]) {
    this.a = Vector.fromButtonLine(buttonALine);
    this.b = Vector.fromButtonLine(buttonBLine);
    this.prize = Vector.fromPrizeLine(prizeLine);
  }

  toString(): string {
    return `a: ${this.a.toString()}, b: ${this.b.toString()}, prize: ${this.prize.toString()}`;
  }

  cheapestPath(): number | null {
    for (let pushesA = 0; pushesA <= 100; pushesA++) {
      const remainingPrizeVector = this.prize.subtract(
        this.a.multiply(pushesA)
      );
      if (remainingPrizeVector.isMultipleOf(this.b)) {
        if (remainingPrizeVector.x / this.b.x <= 100) {
          // It costs 3 tokens to push A
          // It costs 1 token to push B
          return 3 * pushesA + remainingPrizeVector.x / this.b.x;
        }
      }
    }
    return null;
  }
}

export const solvePart1 = (inputLines: string[]) => {
  const clawMachines: ClawMachine[] = [];
  for (let i = 0; i < inputLines.length; i += 4) {
    clawMachines.push(
      new ClawMachine([inputLines[i], inputLines[i + 1], inputLines[i + 2]])
    );
  }
  return clawMachines
    .map((x) => x.cheapestPath())
    .filter((x) => x !== null)
    .reduce((acc, curr) => acc + curr);
};
