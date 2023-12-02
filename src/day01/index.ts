// Dependencies

import { readFileSync } from "fs";
import path from "path";

// Local Dependencies

import parseInput from "./parse-input";
import part1 from "./part1";
import part2 from "./part2";

// Types

export type Input = string[];

// Public

async function main() {
  const raw = readFileSync(path.join(import.meta.dir, "input.txt")).toString();
  const input = parseInput(raw);

  const result1 = part1(input);
  console.log(result1);

  const result2 = part2(input);
  console.log(result2);
}

main();
