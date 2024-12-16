import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./10.ts";

describe("Day 10", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/10/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(36)
      ));
    test("real input", () =>
      getInputStrings("./inputs/10/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(786)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./inputs/10/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(81)
      ));
    test("real input", () =>
      getInputStrings("./inputs/10/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(1722)
      ));
  });
});
