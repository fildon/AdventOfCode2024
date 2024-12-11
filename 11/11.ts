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
