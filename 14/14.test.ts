import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./14.ts";

describe("Day 14", () => {
  describe("Part 01", () => {
    test("real input", () =>
      getInputStrings("./inputs/14/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(224357412)
      ));
  });
  describe("Part 02", () => {
    test("real input", () =>
      getInputStrings("./inputs/14/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(7083)
      ));
  });
});
