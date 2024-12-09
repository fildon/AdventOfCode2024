import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./07.ts";

describe("Day 07", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./07/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(3749)
      ));
    test("real input", () =>
      getInputStrings("./07/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(21572148763543)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./07/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(11387)
      ));
    test("real input", () =>
      getInputStrings("./07/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(581941094529163)
      ));
  });
});
