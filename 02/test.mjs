// @ts-check
import { strictEqual } from "node:assert";
import { describe, test } from "node:test";

import { getInputStrings } from "../utils.mjs";

import { solvePart1, solvePart2 } from "./index.mjs";

describe("Day 02", () => {
  describe("Part 02", () => {
    test("test input", () =>
      strictEqual(solvePart1(getInputStrings("./02/input-test.txt")), 2));
    test("real input", () =>
      strictEqual(solvePart1(getInputStrings("./02/input-real.txt")), 502));
  });
  describe("Part 02", () => {
    test("test input", () =>
      strictEqual(solvePart2(getInputStrings("./02/input-test.txt")), 4));
    test("real input", () =>
      strictEqual(solvePart2(getInputStrings("./02/input-real.txt")), 544));
  });
});
