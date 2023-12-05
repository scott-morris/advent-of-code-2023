// Dependencies

// Types

import '../index.d.ts';
import type { Input, Card } from './index.ts';
import { getNumMatches } from './part1.ts';

const cache: Map<number, number> = new Map();

// Public

export function getNumCards(card: Card, index: number, pack: Card[]): number {
  if (cache.has(index)) {
    return cache.get(index) as number;
  }

  const numMatches = getNumMatches(card);
  let numCards = 1; // for this card
  for (let i = 0; i < numMatches; i++) {
    const cardIndex = index + i + 1;
    numCards += getNumCards(pack[cardIndex], cardIndex, pack);
  }

  return numCards;
}

export default function part2(input: Input): Answer {
  return input.reduce(
    (sum, card, index, pack) => sum + getNumCards(card, index, pack),
    0
  );
}
