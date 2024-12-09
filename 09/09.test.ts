import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./09.ts";

describe("Day 09", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./09/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(1928)
      ));
    test("real input", () =>
      getInputStrings("./09/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(6519155389266)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./09/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(2858)
      ));
    test("real input", () =>
      getInputStrings("./09/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(6547228115826)
      ));
  });
});
