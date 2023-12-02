// Dependencies
import { parseIteration, replaceSpelledDigits } from "./helpers.ts";

// Types

import "../index.d.ts";
import type { Input } from "./index.ts";

// Public

export default function part2(input: Input): Answer {
  return input.reduce(
    (sum: number, str: string) =>
      sum + parseIteration(replaceSpelledDigits(str)),
    0
  );
}
