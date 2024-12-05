import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./05.ts";

describe("Day 05", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./05/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(143)
      ));
    test("real input", () =>
      getInputStrings("./05/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(6951)
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      getInputStrings("./05/input-test.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(123)
      ));
    test("real input", () =>
      getInputStrings("./05/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(4121)
      ));
  });
});
