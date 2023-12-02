// Dependencies

import * as parse from '@helpers/parse-input.ts';
import '../index.d.ts';
import type { Input, Pull, Game } from './index.ts';

// Public

export function parsePull(pull: string): Pull {
  const items = pull.split(', ');
  return items.reduce(
    (obj, str) => {
      const match = str.match(/(\d+) (.*)/);
      if (match === null) {
        return obj;
      }

      const [_, num, color] = match;
      return { ...obj, [color]: Number(num) };
    },
    { blue: 0, green: 0, red: 0 }
  );
}

export function parseGame(game: string): Game | null {
  const match = game.match(/Game (\d+): (.*)/);
  if (match === null) {
    return null;
  }

  const [_, gameNum, pulls] = match;
  return {
    number: Number(gameNum),
    pulls: pulls.split('; ').map(parsePull),
  };
}

export default function parseInput(input: string): Input {
  return parse.arrayOfStrings(input).map(parseGame) as Game[];
}
