import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./01.ts";

describe("Day 01", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./01/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(11)
      ));
    test("real input", () =>
      getInputStrings("./01/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(1834060)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./01/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(31)
      ));
    test("real input", () =>
      getInputStrings("./01/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(21607792)
      ));
  });
});
