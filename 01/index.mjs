// @ts-check

// https://adventofcode.com/2024/day/1

/**
 * Find the sum of differences between numbers when sorted
 *
 * @param {string[]} inputLines
 */
export const solvePart1 = (inputLines) => {
  const pairs = inputLines.map((line) => line.split("   "));
  const left = pairs
    .map((pair) => pair[0])
    .map((str) => parseInt(str))
    .sort();
  const right = pairs
    .map((pair) => pair[1])
    .map((str) => parseInt(str))
    .sort();

  return left
    .map((l, i) => Math.abs(l - right[i]))
    .reduce((acc, curr) => acc + curr);
};

/**
 * Given an array, returns a function that scores a given element
 *
 * The score is the value of the element, multiplied by its count in the array
 * @param {number[]} arr
 * @returns number => number
 */
const score = (arr) => (element) =>
  element * arr.filter((x) => x === element).length;

/**
 * Score each number in "left" by multiplying its value by its count in "right"
 *
 * @param {string[]} inputLines
 */
export const solvePart2 = (inputLines) => {
  const pairs = inputLines.map((line) => line.split("   "));
  const left = pairs.map((pair) => pair[0]).map((str) => parseInt(str));
  const right = pairs.map((pair) => pair[1]).map((str) => parseInt(str));

  return left.map(score(right)).reduce((acc, curr) => acc + curr);
};
