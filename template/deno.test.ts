// Libraries

import { describe, expect, test } from 'bun:test';
import type { Input } from './index.ts';
import '../index.d.ts';

// Dependencies

import parseInput from './parse-input.ts';
import part1 from './part1.ts';
import part2 from './part2.ts';

// Tests

describe('Day #', () => {
  const rawInput1 = ``;
  const rawInput2 = rawInput1;

  const input1: Input = [];
  const input2: Input = input1;

  describe('parse-input.ts', () => {
    describe('parseInput()', () => {
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
      expect(result).toEqual('TBD');
    });
  });

  describe('part2.ts', () => {
    test('when given the sample input, the answer should be correct', () => {
      const result = part2(input2);
      expect(result).toEqual('TBD');
    });
  });
});
