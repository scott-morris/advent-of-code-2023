// Dependencies

// Types

import '../index.d.ts';
import type { Input, Game } from './index.ts';
import { minimumNeeded } from './part1.ts';

// Public

export function calculatePower(game: Game): number {
  const { blue, green, red } = minimumNeeded(game);
  return blue * green * red;
}

export default function part2(input: Input): Answer {
  return input.reduce((sum, game) => sum + calculatePower(game), 0);
}
