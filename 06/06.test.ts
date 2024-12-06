import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./06.ts";

describe("Day 06", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./06/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(41)
      ));
    test("real input", () =>
      getInputStrings("./06/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(4515)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./06/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(6)
      ));
    test("real input", () =>
      getInputStrings("./06/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(1309)
      ));
  });
});
