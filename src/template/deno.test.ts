// Libraries

import { describe, expect, test } from 'bun:test';
import { Day<%= it.dayString %>Input } from "./types.d.ts";
import "../types/global.d.ts";

// Dependencies

import parseInput from "./parse-input.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";

// Tests

describe("Day <%= it.day %>", () => {
  const rawInput = ``;

  const input: Day<%= it.dayString %>Input = [];

  describe("parse-input.ts", () => {
    describe.ignore("parseInput()", () => {
      it("when given the sample input, it should return what we want to work with", () => {
        const parsedInput = parseInput(rawInput);
        assertEquals(parsedInput, input);
      });
    });
  });

  describe("part1.ts", () => {
    describe.ignore("part1()", () => {
      it("when given the sample input, the answer should be 0", () => {
        const result = part1(input);
        assertEquals(result, 0);
      });
    });
  });

  describe("part2.ts", () => {
    describe.ignore("part2()", () => {
      it("when given the sample input, the answer should be 0", () => {
        const result = part2(input);
        assertEquals(result, 0);
      });
    });
  });
});
