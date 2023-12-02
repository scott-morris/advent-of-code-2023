// Libraries

import { describe, expect, test } from 'bun:test';
import type { Input } from './index.ts';
import '../index.d.ts';

// Dependencies

import parseInput, { parsePull } from './parse-input.ts';
import part1, { isGamePossible, minimumNeeded } from './part1.ts';
import part2, { calculatePower } from './part2.ts';

// Tests

describe('Day 2', () => {
  const rawInput1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
  const rawInput2 = rawInput1;

  const input1: Input = [
    {
      number: 1,
      pulls: [
        { blue: 3, green: 0, red: 4 },
        { blue: 6, green: 2, red: 1 },
        { blue: 0, green: 2, red: 0 },
      ],
    },
    {
      number: 2,
      pulls: [
        { blue: 1, green: 2, red: 0 },
        { blue: 4, green: 3, red: 1 },
        { blue: 1, green: 1, red: 0 },
      ],
    },
    {
      number: 3,
      pulls: [
        { blue: 6, green: 8, red: 20 },
        { blue: 5, green: 13, red: 4 },
        { blue: 0, green: 5, red: 1 },
      ],
    },
    {
      number: 4,
      pulls: [
        { blue: 6, green: 1, red: 3 },
        { blue: 0, green: 3, red: 6 },
        { blue: 15, green: 3, red: 14 },
      ],
    },
    {
      number: 5,
      pulls: [
        { blue: 1, green: 3, red: 6 },
        { blue: 2, green: 2, red: 1 },
      ],
    },
  ];
  const input2: Input = [...input1];

  describe('parse-input.ts', () => {
    describe('parsePull()', () => {
      test('when given the pulls from the first example, it should parse correctly', () => {
        expect(parsePull('3 blue, 4 red')).toStrictEqual({
          blue: 3,
          green: 0,
          red: 4,
        });
        expect(parsePull('1 red, 2 green, 6 blue')).toStrictEqual({
          blue: 6,
          green: 2,
          red: 1,
        });
        expect(parsePull('2 green')).toStrictEqual({
          blue: 0,
          green: 2,
          red: 0,
        });
      });
    });

    describe('parseInput()', () => {
      test('when given the sample input for step 1, it should return what we want to work with', () => {
        const parsedInput = parseInput(rawInput1);
        expect(parsedInput).toStrictEqual(input1);
      });
    });
  });

  describe('part1.ts', () => {
    describe('isGamePossible()', () => {
      test('the given examples should be possible', () => {
        expect(isGamePossible(input1[0])).toEqual(true);
        expect(isGamePossible(input1[1])).toEqual(true);
        expect(isGamePossible(input1[4])).toEqual(true);
      });

      test('the given examples should not be possible', () => {
        expect(isGamePossible(input1[2])).toEqual(false);
        expect(isGamePossible(input1[3])).toEqual(false);
      });
    });

    describe('minimumNeeded()', () => {
      test('the minimum items needed should match the requirements', () => {
        expect(minimumNeeded(input1[0])).toStrictEqual({
          blue: 6,
          green: 2,
          red: 4,
        });
        expect(minimumNeeded(input1[1])).toStrictEqual({
          blue: 4,
          green: 3,
          red: 1,
        });
        expect(minimumNeeded(input1[2])).toStrictEqual({
          blue: 6,
          green: 13,
          red: 20,
        });
        expect(minimumNeeded(input1[3])).toStrictEqual({
          blue: 15,
          green: 3,
          red: 14,
        });
        expect(minimumNeeded(input1[4])).toStrictEqual({
          blue: 2,
          green: 3,
          red: 6,
        });
      });
    });

    test('when given the sample input, the answer should be correct', () => {
      const result = part1(input1);
      expect(result).toEqual(8);
    });
  });

  describe('part2.ts', () => {
    describe('calculatePower()', () => {
      test('when given the games, it should match the specs', () => {
        expect(calculatePower(input1[0])).toEqual(48);
        expect(calculatePower(input1[1])).toEqual(12);
        expect(calculatePower(input1[2])).toEqual(1560);
        expect(calculatePower(input1[3])).toEqual(630);
        expect(calculatePower(input1[4])).toEqual(36);
      });
    });

    test('when given the sample input, the answer should be correct', () => {
      const result = part2(input2);
      expect(result).toEqual(2286);
    });
  });
});
