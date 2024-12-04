const reportIsSafe = (report: number[]) => {
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

export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .map((line) => line.split(" ").map((numStr) => parseInt(numStr)))
    .filter(reportIsSafe).length;

const reportIsSafeWithDampener = (report: number[]) =>
  [
    // We prepend the original report here since it might already be safe without dampening
    report,
    // Generate every possible dampened report
    ...Array.from({ length: report.length })
      .fill(0)
      .map((_, i) => [...report.slice(0, i), ...report.slice(i + 1)]),
  ]
    // This report is safe if at least one version is safe
    .some(reportIsSafe);

export const solvePart2 = (inputLines: string[]) =>
  inputLines
    .map((line) => line.split(" ").map((numStr) => parseInt(numStr)))
    .filter(reportIsSafeWithDampener).length;
