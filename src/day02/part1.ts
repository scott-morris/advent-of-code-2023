// Dependencies

import '../index.d.ts';
import type { Input, Game, Pull } from './index';

// Public

// Which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

export function minimumNeeded(game: Game): Pull {
  return game.pulls.reduce(
    (max_values, pull) => {
      return {
        blue: Math.max(pull.blue, max_values.blue),
        green: Math.max(pull.green, max_values.green),
        red: Math.max(pull.red, max_values.red),
      };
    },
    { blue: 0, green: 0, red: 0 } as Pull
  );
}

export function isGamePossible(game: Game): boolean {
  const { red, green, blue } = minimumNeeded(game);
  return red <= MAX_RED && green <= MAX_GREEN && blue <= MAX_BLUE;
}

export default function part1(input: Input): Answer {
  const possibleGames = input.filter((game) => isGamePossible(game));

  return possibleGames.reduce((sum, game) => sum + game.number, 0);
}
