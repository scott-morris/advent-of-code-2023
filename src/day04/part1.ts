// Dependencies

import '../index.d.ts';
import type { Input, Card } from './index';

// Public

export function getNumMatches(card: Card): number {
  return card.numbers.reduce(
    (sum, num) => (card.winning.includes(num) ? sum + 1 : sum),
    0
  );
}

export default function part1(input: Input): Answer {
  return input.reduce((sum, card) => {
    const numMatches = getNumMatches(card);
    return numMatches > 0 ? sum + Math.pow(2, numMatches - 1) : sum;
  }, 0);
}
