// Libraries

import { describe, expect, test } from 'bun:test';
import type { Input } from './index.ts';

// Dependencies

import parseInput from './parse-input.ts';
import part1, { isValidPartNumber } from './part1.ts';
import part2 from './part2.ts';
import { Area } from '@helpers/matrix.ts';
import { arrayOfStrings } from '@helpers/parse-input.ts';

// Tests

describe('Day 3', () => {
  const rawInput1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
  const lines = arrayOfStrings(rawInput1);

  const rawInput2 = rawInput1;

  const input1: Input = {
    numbers: [
      { value: 467, area: new Area({ x: -1, y: -1 }, { x: 3, y: 1 }) },
      { value: 114, area: new Area({ x: 4, y: -1 }, { x: 8, y: 1 }) },
      { value: 35, area: new Area({ x: 1, y: 1 }, { x: 4, y: 3 }) },
      { value: 633, area: new Area({ x: 5, y: 1 }, { x: 9, y: 3 }) },
      { value: 617, area: new Area({ x: -1, y: 3 }, { x: 3, y: 5 }) },
      { value: 58, area: new Area({ x: 6, y: 4 }, { x: 9, y: 6 }) },
      { value: 592, area: new Area({ x: 1, y: 5 }, { x: 5, y: 7 }) },
      { value: 755, area: new Area({ x: 5, y: 6 }, { x: 9, y: 8 }) },
      { value: 664, area: new Area({ x: 0, y: 8 }, { x: 4, y: 10 }) },
      { value: 598, area: new Area({ x: 4, y: 8 }, { x: 8, y: 10 }) },
    ],
    symbols: [
      { symbol: '*', location: { x: 3, y: 1 } },
      { symbol: '#', location: { x: 6, y: 3 } },
      { symbol: '*', location: { x: 3, y: 4 } },
      { symbol: '+', location: { x: 5, y: 5 } },
      { symbol: '$', location: { x: 3, y: 8 } },
      { symbol: '*', location: { x: 5, y: 8 } },
    ],
  };
  const input2: Input = input1;

  describe('parse-input.ts', () => {
    describe('parseInput()', () => {
      describe('findPartNumbers()', () => {
        const parsedInput = parseInput(rawInput1);
        parsedInput.numbers.forEach((result, i) => {
          test(`it should match for index ${i}`, () => {
            expect(result).toStrictEqual(input1.numbers[i]);
          });
        });
      });

      describe('findPartSymbols()', () => {
        const parsedInput = parseInput(rawInput1);
        parsedInput.symbols.forEach((result, i) => {
          test(`it should match for index ${i}`, () => {
            expect(result).toStrictEqual(input1.symbols[i]);
          });
        });
      });

      test.skip('when given the sample input for step 1, it should return what we want to work with', () => {
        const parsedInput = parseInput(rawInput1);
        expect(parsedInput).toStrictEqual(input1);
      });
    });
  });

  describe('part1.ts', () => {
    describe('isValidPartNumber()', () => {
      test('the given valid part numbers should return true', () => {
        expect(isValidPartNumber(input1.numbers[0], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[2], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[3], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[4], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[6], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[7], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[8], input1.symbols)).toEqual(
          true
        );
        expect(isValidPartNumber(input1.numbers[9], input1.symbols)).toEqual(
          true
        );
      });

      test('the other given part numbers should return false', () => {
        expect(isValidPartNumber(input1.numbers[1], input1.symbols)).toEqual(
          false
        );
        expect(isValidPartNumber(input1.numbers[5], input1.symbols)).toEqual(
          false
        );
      });
    });

    test('when given the sample input, the answer should be correct', () => {
      const result = part1(input1);
      expect(result).toEqual(4361);
    });
  });

  describe('part2.ts', () => {
    test('when given the sample input, the answer should be correct', () => {
      const result = part2(input2);
      expect(result).toEqual('TBD');
    });
  });
});
