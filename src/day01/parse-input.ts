// Dependencies

import {
  parseArrayOfStrings,
  parseStringArray,
  parseNumberArray,
  parseNumberMatrix,
  parseStringMatrix,
} from "@helpers/parse.ts";
import "../index.d.ts";
import type { Input } from "./index.ts";

// Public

export default function parseInput(input: RawInput): Input {
  return parseArrayOfStrings(input);
}
