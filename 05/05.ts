type Constraint = [number, number];

const constraintIsSatisfied = (
  update: number[],
  [lesser, greater]: Constraint
) => {
  // A constraint is automatically satisfied if either number is NOT present
  if (!update.includes(lesser)) return true;
  if (!update.includes(greater)) return true;

  const lesserIndex = update.indexOf(lesser);
  const greaterIndex = update.indexOf(greater);

  // Otherwise the lesser value must appear before the greater value
  return lesserIndex < greaterIndex;
};

const updateIsValid = (update: number[], constraints: Constraint[]) =>
  constraints.every((constraint) => constraintIsSatisfied(update, constraint));

/**
 * Find the middle element in an array
 */
const middle = <T>(arr: T[]) => arr[Math.floor(arr.length / 2)];

export const solvePart1 = (inputLines: string[]) => {
  const emptyLineIndex = inputLines.indexOf("");

  const constraints = inputLines.slice(0, emptyLineIndex).map(
    (constraintStr) =>
      // Naughty type-cast here, because we know we always get 2 parts
      constraintStr.split("|").map((part) => parseInt(part)) as Constraint
  );

  const updates = inputLines
    .slice(emptyLineIndex + 1)
    .map((updateStr) => updateStr.split(",").map((numStr) => parseInt(numStr)));

  const validUpdates = updates.filter((update) =>
    updateIsValid(update, constraints)
  );

  return validUpdates.map(middle).reduce((acc, curr) => acc + curr);
};
