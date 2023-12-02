// Dependencies

import { parseIteration } from "./helpers.ts";

// Types

import type { Input } from "./index.ts";

// Public

export default function part1(input: Input): Answer {
  return input.reduce(
    (sum: number, str: string) => sum + parseIteration(str),
    0
  );
}
