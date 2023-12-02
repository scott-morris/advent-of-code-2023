// Libraries

import { describe, expect, test } from "bun:test";
import type { Input } from "./index.ts";
import "../index.d.ts";

// Dependencies

import parseInput from "./parse-input.ts";
import part1, { processLine, parseNumberFromString } from "./part1.ts";
import part2, { getAllDigits } from "./part2.ts";

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

      test("when given the test data for part 2, it should return the correct numbers", () => {
        expect(processLine(getAllDigits(input2[0]))).toEqual(29);
        expect(processLine(getAllDigits(input2[1]))).toEqual(83);
        expect(processLine(getAllDigits(input2[2]))).toEqual(13);
        expect(processLine(getAllDigits(input2[3]))).toEqual(24);
        expect(processLine(getAllDigits(input2[4]))).toEqual(42);
        expect(processLine(getAllDigits(input2[5]))).toEqual(14);
        expect(processLine(getAllDigits(input2[6]))).toEqual(76);
      });
    });
  });

  describe("part1.ts", () => {
    test("when given the sample input, the answer should be 142", () => {
      const result = part1(input1);

      expect(result).toEqual(142);
    });

    describe("parseNumberFromString()", () => {
      test("when given the test data, it should return an array of just the numbers", () => {
        expect(parseNumberFromString(input1[0])).toStrictEqual([1, 2]);
        expect(parseNumberFromString(input1[1])).toStrictEqual([3, 8]);
        expect(parseNumberFromString(input1[2])).toStrictEqual([1, 2, 3, 4, 5]);
        expect(parseNumberFromString(input1[3])).toStrictEqual([7]);
      });
    });

    describe("processLine()", () => {
      test("when given the test data for part 1, it should return the correct numbers", () => {
        expect(processLine(input1[0])).toEqual(12);
        expect(processLine(input1[1])).toEqual(38);
        expect(processLine(input1[2])).toEqual(15);
        expect(processLine(input1[3])).toEqual(77);
      });
    });
  });

  describe("part2.ts", () => {
    test("when given the sample input, the answer should be 281", () => {
      const result = part2(input2);
      expect(result).toEqual(281);
    });

    describe("getAllDigits()", () => {
      test("when given the test data, it should return the strings with numbers replaced", () => {
        expect(getAllDigits(input2[0])).toEqual("219");
        expect(getAllDigits(input2[1])).toEqual("823");
        expect(getAllDigits(input2[2])).toEqual("123");
        expect(getAllDigits(input2[3])).toEqual("2134");
        expect(getAllDigits(input2[4])).toEqual("49872");
        expect(getAllDigits(input2[5])).toEqual("18234");
        expect(getAllDigits(input2[6])).toEqual("76");
      });
    });
  });
});
