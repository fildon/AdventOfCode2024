export const solvePart1 = (inputLines: string[]) => {
  let diskMap = inputLines[0].split("").map((x) => parseInt(x));
  let expandedMap = diskMap.flatMap((length, i) =>
    Array.from<number>({ length }).fill(i % 2 === 0 ? i / 2 : -1)
  );

  while (expandedMap.includes(-1)) {
    const target = expandedMap.indexOf(-1);
    const insertionValue = expandedMap.at(-1)!;
    expandedMap[target] = insertionValue;
    expandedMap = expandedMap.slice(0, -1);
  }

  const checkSum = expandedMap
    .map((x, i) => x * i)
    .reduce((acc, curr) => acc + curr);
  return checkSum;
};

export const solvePart2 = (inputLines: string[]) => {
  let diskMap = inputLines[0].split("").map((x) => parseInt(x));
  let expandedMap = diskMap.flatMap((length, i) =>
    Array.from<number>({ length }).fill(i % 2 === 0 ? i / 2 : -1)
  );

  for (let fileId = expandedMap.at(-1)!; fileId >= 0; fileId--) {
    const fileSize = expandedMap.filter((x) => x === fileId).length;
    const fileLocation = expandedMap.indexOf(fileId);

    // Try to find somewhere to place this file
    for (let i = 0; i < fileLocation; i++) {
      const targetSlice = expandedMap.slice(i, i + fileSize);
      if (
        targetSlice.length === fileSize &&
        targetSlice.every((x) => x === -1)
      ) {
        // We've found a big enough gap!

        // Remove the file from its current location
        expandedMap = expandedMap.map((x) => (x === fileId ? -1 : x));

        // Place the file at its new location
        for (let j = 0; j < fileSize; j++) {
          expandedMap[i + j] = fileId;
        }
        expandedMap.slice(0, -fileSize);
        break;
      }
    }
  }

  const checkSum = expandedMap
    .map((x, i) => (x === -1 ? 0 : x * i))
    .reduce((acc, curr) => acc + curr);
  return checkSum;
};
