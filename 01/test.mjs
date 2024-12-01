// @ts-check
import { strictEqual } from "node:assert";
import { describe, test } from "node:test";

import { getInputStrings } from "../utils.mjs";

import { solvePart1, solvePart2 } from "./index.mjs";

describe("Day 01", () => {
  describe("Part 01", () => {
    test("test input", () =>
      strictEqual(solvePart1(getInputStrings("./01/input-test.txt")), 11));
    test("real input", () =>
      strictEqual(solvePart1(getInputStrings("./01/input-real.txt")), 1834060));
  });
  describe("Part 02", () => {
    test("test input", () =>
      strictEqual(solvePart2(getInputStrings("./01/input-test.txt")), 31));
    test("real input", () =>
      strictEqual(
        solvePart2(getInputStrings("./01/input-real.txt")),
        21607792
      ));
  });
});
