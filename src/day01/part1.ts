// Dependencies

import '../index.d.ts';
import type { Input } from './index';
import { isNumber, getItemAtIndex } from '@helpers';

// Public

/**
 * Get only the numbers from a string
 * @param input the string to parse
 * @returns array of the numbers found
 * @example
 * parseNumberFromString("a1bc2d3e"); // [1, 2, 3]
 */
export function parseNumberFromString(input: string): number[] {
  return input
    .split('')
    .reduce(
      (arr: number[], char) => (isNumber(char) ? [...arr, Number(char)] : arr),
      []
    );
}

/**
 * Parse a line to meet part 1
 * @param input the string to parse
 * @returns a two digit number made of the first and last numbers found in a string
 * @example
 * processLine("a1bc2d3e"); // 13
 */
export function processLine(input: string): number {
  const numbers = parseNumberFromString(input);
  return getItemAtIndex(numbers, 0) * 10 + getItemAtIndex(numbers, -1);
}

export default function part1(input: Input): Answer {
  return input.reduce((sum: number, str: string) => sum + processLine(str), 0);
}
