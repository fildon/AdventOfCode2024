import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./03.ts";

describe("Day 03", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/03/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(161)
      ));
    test("real input", () =>
      getInputStrings("./inputs/03/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(159892596)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./inputs/03/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(48)
      ));
    test("real input", () =>
      getInputStrings("./inputs/03/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(92626942)
      ));
  });
});
