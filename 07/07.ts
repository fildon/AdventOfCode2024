type Equation = {
  target: number;
  args: number[];
};

const toEquation = (inputLine: string): Equation => {
  const [targetStr, argsStr] = inputLine.split(":");
  const target = parseInt(targetStr);
  const args = argsStr
    .trim()
    .split(" ")
    .map((arg) => parseInt(arg));

  return { target, args };
};

export const isPossible =
  ({ withConcatenation }: { withConcatenation: boolean }) =>
  ({ target, args }: Equation): boolean => {
    // We follow a recursive reduction approach, working right-to-left on the args

    // Base cases:
    if (target < 1) return false;
    if (args.length === 1) return target === args[0];

    // Recursive cases:
    // The right-most arg is either a factor of the target,
    // or should be deducted from the target

    const lastArg = args.at(-1)!;
    // All but the last arg
    const reducedArgs = args.slice(0, -1);

    // This case is possible if the factorized subcase
    if (target % lastArg === 0) {
      const factorizedSubcase: Equation = {
        target: target / lastArg,
        args: reducedArgs,
      };
      if (isPossible({ withConcatenation })(factorizedSubcase)) return true;
    }

    const deductedSubcase: Equation = {
      target: target - lastArg,
      args: reducedArgs,
    };

    if (isPossible({ withConcatenation })(deductedSubcase)) return true;

    // If we aren't allowed concatenation, then we are out of options!
    if (!withConcatenation) return false;

    // Compare the last digits of the target to the last arg
    const lastArgStr = `${lastArg}`;
    const targetStr = `${target}`;
    if (!targetStr.endsWith(lastArgStr)) return false;

    const concatenationSubcase: Equation = {
      target: parseInt(`${target}`.slice(0, -1 * lastArgStr.length)),
      args: reducedArgs,
    };

    return isPossible({ withConcatenation })(concatenationSubcase);
  };

export const solvePart1 = (inputLines: string[]) =>
  inputLines
    .map(toEquation)
    .filter(isPossible({ withConcatenation: false }))
    .map(({ target }) => target)
    .reduce((acc, curr) => acc + curr);

export const solvePart2 = (inputLines: string[]) =>
  inputLines
    .map(toEquation)
    .filter(isPossible({ withConcatenation: true }))
    .map(({ target }) => target)
    .reduce((acc, curr) => acc + curr);
