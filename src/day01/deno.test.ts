// Libraries

import { describe, expect, test } from "bun:test";
import type { Input } from "./index.ts";
import "../index.d.ts";

// Dependencies

import parseInput from "./parse-input.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";
import {
  parseIteration,
  parseNumberFromString,
  replaceSpelledDigits,
} from "./helpers.ts";

// Tests

describe("Day 1", () => {
  const rawInput1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  const rawInput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

  const input1: Input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
  const input2: Input = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ];

  describe("parse-input.ts", () => {
    describe("parseInput()", () => {
      test("when given the sample input for step 1, it should return what we want to work with", () => {
        const parsedInput = parseInput(rawInput1);
        expect(parsedInput).toStrictEqual(input1);
      });

      test("when given the sample input for step 2, it should return what we want to work with", () => {
        const parsedInput = parseInput(rawInput2);
        expect(parsedInput).toStrictEqual(input2);
      });
    });
  });

  describe("helpers.ts", () => {
    describe("parseNumberFromString()", () => {
      test("when given the test data, it should return an array of just the numbers", () => {
        expect(parseNumberFromString(input1[0])).toStrictEqual([1, 2]);
        expect(parseNumberFromString(input1[1])).toStrictEqual([3, 8]);
        expect(parseNumberFromString(input1[2])).toStrictEqual([1, 2, 3, 4, 5]);
        expect(parseNumberFromString(input1[3])).toStrictEqual([7]);
      });
    });

    describe("parseIteration()", () => {
      test("when given the test data for part 1, it should return the correct numbers", () => {
        expect(parseIteration(input1[0])).toEqual(12);
        expect(parseIteration(input1[1])).toEqual(38);
        expect(parseIteration(input1[2])).toEqual(15);
        expect(parseIteration(input1[3])).toEqual(77);
      });

      test("when given the test data for part 2, it should return the correct numbers", () => {
        expect(parseIteration(replaceSpelledDigits(input2[0]))).toEqual(29);
        expect(parseIteration(replaceSpelledDigits(input2[1]))).toEqual(83);
        expect(parseIteration(replaceSpelledDigits(input2[2]))).toEqual(13);
        expect(parseIteration(replaceSpelledDigits(input2[3]))).toEqual(24);
        expect(parseIteration(replaceSpelledDigits(input2[4]))).toEqual(42);
        expect(parseIteration(replaceSpelledDigits(input2[5]))).toEqual(14);
        expect(parseIteration(replaceSpelledDigits(input2[6]))).toEqual(76);
      });
    });

    describe("replaceSpelledDigits()", () => {
      test("when given the test data, it should return the strings with numbers replaced", () => {
        expect(replaceSpelledDigits(input2[0])).toEqual("219");
        expect(replaceSpelledDigits(input2[1])).toEqual("823");
        expect(replaceSpelledDigits(input2[2])).toEqual("123");
        expect(replaceSpelledDigits(input2[3])).toEqual("2134");
        expect(replaceSpelledDigits(input2[4])).toEqual("49872");
        expect(replaceSpelledDigits(input2[5])).toEqual("18234");
        expect(replaceSpelledDigits(input2[6])).toEqual("76");
      });
    });
  });

  describe("part1.ts", () => {
    test("when given the sample input, the answer should be 142", () => {
      const result = part1(input1);

      expect(result).toEqual(142);
    });
  });

  describe("part2.ts", () => {
    test("when given the sample input, the answer should be 281", () => {
      const result = part2(input2);
      expect(result).toEqual(281);
    });
  });
});
