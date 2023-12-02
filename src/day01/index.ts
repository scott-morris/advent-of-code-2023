// Dependencies

// import getInputFile from "@helpers/get-input-file.ts";
// import timeExecution from "@helpers/time-execution.ts";
// import displayOutput from "@helpers/display-output.ts";
import "../index.d.ts";
import fs, { readFileSync } from "fs";
import path from "path";

// Local Dependencies

import parseInput from "./parse-input.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";

// Types

export type Input = string[];

// Public

async function main() {
  const raw = fs
    .readFileSync(path.join(import.meta.dir, "input.txt"))
    .toString();
  const input = parseInput(raw);

  const result1 = part1(input);
  console.log(result1);

  const result2 = part2(input);
  console.log(result2);
}

main();
