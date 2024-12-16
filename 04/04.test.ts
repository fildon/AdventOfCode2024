import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./04.ts";

describe("Day 04", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/04/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(18)
      ));
    test("real input", () =>
      getInputStrings("./inputs/04/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(2500)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./inputs/04/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(9)
      ));
    test("real input", () =>
      getInputStrings("./inputs/04/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(1933)
      ));
  });
});
