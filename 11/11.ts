export const solvePart1 = (inputLines: string[]) => {
  let stones = inputLines[0].split(" ");
  const blink = () => {
    stones = stones.flatMap((stone) => {
      if (stone === "0") return "1";
      else if (stone.length % 2 === 0) {
        return [
          stone.slice(0, stone.length / 2),
          `${parseInt(stone.slice(stone.length / 2))}`,
        ];
      } else {
        return `${2024 * parseInt(stone)}`;
      }
    });
  };

  for (let i = 0; i < 25; i++) {
    blink();
  }

  return stones.length;
};

type Stone = {
  val: string;
  age: number;
};

const memoCache = new Map<string, number>();
const memoBlink = ({ val, age }: Stone): number => {
  if (age === 75) return 1;

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

export const solvePart2 = (inputLines: string[]) => {
  let stones = inputLines[0].split(" ").map<Stone>((x) => ({ age: 0, val: x }));

  return stones.map(memoBlink).reduce((acc, curr) => acc + curr);
};
