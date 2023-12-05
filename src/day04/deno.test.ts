// Libraries

import { describe, expect, test } from 'bun:test';
import type { Input } from './index.ts';

// Dependencies

import parseInput, { parseNumbers } from './parse-input.ts';
import part1 from './part1.ts';
import part2 from './part2.ts';

// Tests

describe('Day 4', () => {
  const rawInput1 = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

  const rawInput2 = rawInput1;

  const input1: Input = [
    {
      winning: [41, 48, 83, 86, 17],
      numbers: [83, 86, 6, 31, 17, 9, 48, 53],
    },
    {
      winning: [13, 32, 20, 16, 61],
      numbers: [61, 30, 68, 82, 17, 32, 24, 19],
    },
    {
      winning: [1, 21, 53, 59, 44],
      numbers: [69, 82, 63, 72, 16, 21, 14, 1],
    },
    {
      winning: [41, 92, 73, 84, 69],
      numbers: [59, 84, 76, 51, 58, 5, 54, 83],
    },
    {
      winning: [87, 83, 26, 28, 32],
      numbers: [88, 30, 70, 12, 93, 22, 82, 36],
    },
    {
      winning: [31, 18, 13, 56, 72],
      numbers: [74, 77, 10, 23, 35, 67, 36, 11],
    },
  ];
  const input2: Input = input1;

  describe('parse-input.ts', () => {
    describe('parseInput()', () => {
      describe('parseNumbers()', () => {
        test('it should properly parse all 2-digit numbers', () => {
          expect(parseNumbers('13 32 20 16 61')).toStrictEqual([
            13, 32, 20, 16, 61,
          ]);
        });

        test('it should properly parse when it includes a 1 digit number', () => {
          expect(parseNumbers('83 86  6 31 17  9 48 53')).toStrictEqual([
            83, 86, 6, 31, 17, 9, 48, 53,
          ]);
        });

        test('it should properly parse when it starts with a 1 digit number', () => {
          expect(parseNumbers(' 1 21 53 59 44')).toStrictEqual([
            1, 21, 53, 59, 44,
          ]);
        });
      });

      test('when given the sample input for step 1, it should return what we want to work with', () => {
        const parsedInput = parseInput(rawInput1);
        expect(parsedInput).toStrictEqual(input1);
      });

      test('when given the sample input for step 2, it should return what we want to work with', () => {
        const parsedInput = parseInput(rawInput2);
        expect(parsedInput).toStrictEqual(input2);
      });
    });
  });

  describe('part1.ts', () => {
    test('when given the sample input, the answer should be correct', () => {
      const result = part1(input1);
      expect(result).toEqual(13);
    });
  });

  describe('part2.ts', () => {
    test('when given the sample input, the answer should be correct', () => {
      const result = part2(input2);
      expect(result).toEqual(30);
    });
  });
});
