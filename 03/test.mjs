// @ts-check
import { strictEqual } from "node:assert";
import { describe, test } from "node:test";

import { getInputStrings } from "../utils.mjs";

import { solvePart1, solvePart2 } from "./index.mjs";

describe("Day 03", () => {
  describe("Part 01", () => {
    test("test input", () =>
      strictEqual(solvePart1(getInputStrings("./03/input-test1.txt")), 161));
    test("real input", () =>
      strictEqual(
        solvePart1(getInputStrings("./03/input-real.txt")),
        159892596
      ));
  });
  describe("Part 02", () => {
    test("test input", () =>
      strictEqual(solvePart2(getInputStrings("./03/input-test2.txt")), 48));
    test("real input", () =>
      strictEqual(
        solvePart2(getInputStrings("./03/input-real.txt")),
        92626942
      ));
  });
});
