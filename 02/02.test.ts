import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./02.ts";

describe("Day 02", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/02/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(2)
      ));
    test("real input", () =>
      getInputStrings("./inputs/02/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(502)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./inputs/02/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(4)
      ));
    test("real input", () =>
      getInputStrings("./inputs/02/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(544)
      ));
  });
});
