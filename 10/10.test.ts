import { expect, test, describe } from "bun:test";

import { getInputStrings } from "../utils.js";

import { solvePart1 } from "./10.ts";

describe("Day 09", () => {
  describe("Part 01", () => {
    test("test input", () =>
      getInputStrings("./10/input-test.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(36)
      ));
    test("real input", () =>
      getInputStrings("./10/input-real.txt").then((inputLines) =>
        expect(solvePart1(inputLines)).toBe(786)
      ));
  });
});
