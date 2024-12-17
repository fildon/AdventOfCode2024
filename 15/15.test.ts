import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1 } from "./15.ts";

describe("Day 15", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/15/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(2028)
      ));
    test("real input", () =>
      getInputStrings("./inputs/15/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(1527563)
      ));
  });
});
