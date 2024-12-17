class Vector {
  public readonly x: number;
  public readonly y: number;
  constructor([x, y]: [number, number]) {
    this.x = x;
    this.y = y;
  }
  add(other: Vector): Vector {
    return new Vector([this.x + other.x, this.y + other.y]);
  }
  scale(scale: number): Vector {
    return new Vector([this.x * scale, this.y * scale]);
  }
  moduloBound(height: number, width: number): Vector {
    return new Vector([
      ((this.x % width) + width) % width,
      ((this.y % height) + height) % height,
    ]);
  }
  equals(other: Vector): boolean {
    return this.x === other.x && this.y === other.y;
  }
  isNeighbourOf(other: Vector): boolean {
    if (this.equals(other)) return false;
    if (Math.abs(this.x - other.x) > 1) return false;
    if (Math.abs(this.y - other.y) > 1) return false;
    return true;
  }
}

class Robot {
  public position: Vector;
  private velocity: Vector;
  constructor(robotLine: string) {
    const [p, v] = robotLine
      .split(" ")
      .map((x) => x.slice(2))
      .map((x) => x.split(","));
    this.position = new Vector([parseInt(p[0]), parseInt(p[1])]);
    this.velocity = new Vector([parseInt(v[0]), parseInt(v[1])]);
  }

  /**
   * Advance this robot by the given amount of time
   * And in a space bounded by the given height and width
   */
  advance(time: number, height: number, width: number) {
    this.position = this.position
      .add(this.velocity.scale(time))
      .moduloBound(height, width);
  }
}

const debug = (robots: Robot[], height: number, width: number) => {
  console.log("state:");
  for (let row = 0; row < height; row++) {
    console.log(
      Array.from({ length: width })
        .fill(".")
        .map((_, col) => {
          const count = robots.filter((robot) =>
            robot.position.equals(new Vector([col, row]))
          ).length;
          return count > 0 ? `${count}` : ".";
        })
        .join("")
    );
  }
};

export const solvePart1 = (inputLines: string[]) => {
  const height = 103;
  const width = 101;
  const robots = inputLines.map((inputLine) => new Robot(inputLine));

  robots.forEach((robot) => robot.advance(100, height, width));

  // Count the number of robots in each quandrant
  const isLeftHalf = (v: Vector) => v.x < (width - 1) / 2;
  const isRightHalf = (v: Vector) => v.x > (width - 1) / 2;
  const isTopHalf = (v: Vector) => v.y < (height - 1) / 2;
  const isBottomHalf = (v: Vector) => v.y > (height - 1) / 2;
  const nw = robots.filter(
    ({ position }) => isLeftHalf(position) && isTopHalf(position)
  ).length;
  const ne = robots.filter(
    ({ position }) => isRightHalf(position) && isTopHalf(position)
  ).length;
  const sw = robots.filter(
    ({ position }) => isLeftHalf(position) && isBottomHalf(position)
  ).length;
  const se = robots.filter(
    ({ position }) => isRightHalf(position) && isBottomHalf(position)
  ).length;

  return nw * ne * sw * se;
};

export const solvePart2 = (inputLines: string[]) => {
  const height = 103;
  const width = 101;
  const robots = inputLines.map((inputLine) => new Robot(inputLine));

  let steps = 0;
  while (
    // While any robot is in the same position as a different robot
    robots.some((robot, i) =>
      robots.some(
        (other, j) => i !== j && robot.position.equals(other.position)
      )
    )
  ) {
    robots.forEach((robot) => robot.advance(1, height, width));
    steps++;
  }
  return steps;
};
