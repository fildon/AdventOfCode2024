type Stone = {
  val: string;
  age: number;
};

const createMemoizedBlinker = (ageLimit: number) => {
  const memoCache = new Map<string, number>();
  const memoBlink = ({ val, age }: Stone): number => {
    if (age === ageLimit) return 1;

    const cacheKey = `${val},${age}`;
    if (memoCache.has(cacheKey)) return memoCache.get(cacheKey)!;

    if (val === "0") {
      const result = memoBlink({ val: "1", age: age + 1 });
      memoCache.set(cacheKey, result);
      return result;
    }

    if (val.length % 2 === 0) {
      const result =
        memoBlink({
          val: val.slice(0, val.length / 2),
          age: age + 1,
        }) +
        memoBlink({
          val: `${parseInt(val.slice(val.length / 2))}`,
          age: age + 1,
        });
      memoCache.set(cacheKey, result);
      return result;
    }

    const result = memoBlink({
      val: `${2024 * parseInt(val)}`,
      age: age + 1,
    });
    memoCache.set(cacheKey, result);
    return result;
  };
  return memoBlink;
};

export const solvePart1 = (inputLines: string[]) => {
  let stones = inputLines[0].split(" ").map<Stone>((x) => ({ age: 0, val: x }));

  const blinker = createMemoizedBlinker(25);

  return stones.map(blinker).reduce((acc, curr) => acc + curr);
};

export const solvePart2 = (inputLines: string[]) => {
  let stones = inputLines[0].split(" ").map<Stone>((x) => ({ age: 0, val: x }));

  const blinker = createMemoizedBlinker(75);

  return stones.map(blinker).reduce((acc, curr) => acc + curr);
};
