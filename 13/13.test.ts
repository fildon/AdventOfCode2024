import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1 } from "./13.ts";

describe("Day 13", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./inputs/13/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(480)
      ));
    test("real input", () =>
      getInputStrings("./inputs/13/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(31623)
      ));
  });
});
