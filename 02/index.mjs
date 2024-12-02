/**
 * @param {number[]} report
 */
const reportIsSafe = (report) => {
  const expectedDirection = report[0] < report[1];

  for (let i = 1; i < report.length; i++) {
    const [a, b] = report.slice(i - 1, i + 1);

    // Matches consistent direction
    if (a < b !== expectedDirection) return false;

    // Matches safe range
    const diff = Math.abs(a - b);
    if (diff < 1) return false;
    if (diff > 3) return false;
  }
  return true;
};

/**
 * @param {string[]} inputLines
 */
export const solvePart1 = (inputLines) =>
  inputLines
    .map((line) => line.split(" ").map((numStr) => parseInt(numStr)))
    .filter(reportIsSafe).length;

export const solvePart2 = () => {
  // TODO
};
