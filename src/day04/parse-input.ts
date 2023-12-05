// Dependencies

import * as parse from '@helpers/parse-input.ts';
import '../index.d.ts';
import type { Card, Input } from './index.ts';

// Public

export function parseNumbers(list: string): number[] {
  // remove whitespace on ends and standardize one space between numbers
  const sanitized = list.trim().replaceAll(/\s+/g, ' ');
  return sanitized.split(' ').map((s) => Number(s));
}

export function parseLine(line: string): Card {
  const [cardString, remainder] = line.split(': ');
  const [winningString, numbersString] = remainder.split(' | ');
  return {
    winning: parseNumbers(winningString),
    numbers: parseNumbers(numbersString),
  };
}

export default function parseInput(input: string): Input {
  const lines = parse.arrayOfStrings(input);

  return lines.map((line) => parseLine(line));
}
