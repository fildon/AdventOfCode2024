import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1, solvePart2 } from "./11.ts";

describe("Day 11", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./11/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(55312)
      ));
    test("real input", () =>
      getInputStrings("./11/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(193269)
      ));
  });
  describe("Part 02", () => {
    test("real input", () =>
      getInputStrings("./11/input-real.txt").then((inputLines) =>
        expect(solvePart2(inputLines)).toBe(228449040027793)
      ));
  });
});
