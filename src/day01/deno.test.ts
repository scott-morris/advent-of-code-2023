// Libraries

import { describe, expect, test } from "bun:test";
import type { Input } from "./index.ts";
import "../index.d.ts";

// Dependencies

import parseInput from "./parse-input.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";

// Tests

describe("Day 1", () => {
  const rawInput = ``;

  const input: Input = [];

  describe("parse-input.ts", () => {
    describe.skip("parseInput()", () => {
      test("when given the sample input, it should return what we want to work with", () => {
        const parsedInput = parseInput(rawInput);
        expect(parsedInput).toStrictEqual(input);
      });
    });
  });

  describe("part1.ts", () => {
    describe.skip("part1()", () => {
      test("when given the sample input, the answer should be 0", () => {
        const result = part1(input);

        expect(result).toEqual(0);
      });
    });
  });

  describe("part2.ts", () => {
    describe.skip("part2()", () => {
      test("when given the sample input, the answer should be 0", () => {
        const result = part2(input);
        expect(result).toEqual(0);
      });
    });
  });
});
