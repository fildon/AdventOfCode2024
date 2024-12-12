import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1 } from "./12.ts";

describe("Day 12", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./12/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(1930)
      ));
    test("real input", () =>
      getInputStrings("./12/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(1456082)
      ));
  });
});
