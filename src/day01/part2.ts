// Dependencies

import { isNumber } from '@helpers';
import { processLine } from './part1';

// Types

import '../index.d.ts';
import type { Input } from './index.ts';

// Public

const DIGITS: { [key: string]: string } = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

/**
 * Get all of the digits, number and spelled out, from a string
 * @param input the string to parse
 * @returns a string with only the digits found
 * @example
 * getAllDigits("sevenineightfoo2fiveight"); // "798258"
 */
export function getAllDigits(input: string): string {
  const digits: string[] = [];
  const DIGIT_REGEX = /(one|two|three|four|five|six|seven|eight|nine|[0-9])/;
  let line = input;
  let match;

  while ((match = line.search(DIGIT_REGEX)) > -1) {
    line = line.slice(match);
    const [firstChar, ...remaining] = line;
    if (isNumber(firstChar)) {
      digits.push(firstChar);
    } else {
      Object.keys(DIGITS).forEach((key) => {
        if (line.slice(0, key.length) === key) {
          digits.push(DIGITS[key]);
          return;
        }
      });
    }
    line = remaining.join('');
  }

  return digits.join('');
}

export default function part2(input: Input): Answer {
  return input.reduce(
    (sum: number, str: string) => sum + processLine(getAllDigits(str)),
    0
  );
}
