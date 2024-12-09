import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./08.ts";

describe("Day 08", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./08/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(14)
      ));
    test("real input", () =>
      getInputStrings("./08/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(313)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./08/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(34)
      ));
    test("real input", () =>
      getInputStrings("./08/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(1064)
      ));
  });
});
