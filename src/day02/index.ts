// Dependencies

import { readFileSync } from 'fs';
import path from 'path';

// Local Dependencies

import parseInput from './parse-input';
import part1 from './part1';
import part2 from './part2';

// Types

export interface Pull {
  blue: number;
  green: number;
  red: number;
}

export interface Game {
  number: number;
  pulls: Pull[];
}

export type Input = Game[];

// Public

async function main() {
  const raw = readFileSync(path.join(import.meta.dir, 'input.txt')).toString();
  const input = parseInput(raw);

  const result1 = part1(input);
  console.log(result1);

  const result2 = part2(input);
  console.log(result2);
}

main();
