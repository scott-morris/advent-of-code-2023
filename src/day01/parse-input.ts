// Dependencies

import {
  parseStringArray,
  parseNumberArray,
  parseNumberMatrix,
  parseStringMatrix,
} from "@helpers/parse.ts";
import "../types/global.d.ts";
import type { Input } from "./index.ts";

// Public

export default function parseInput(input: RawInput): Input {
  return parseNumberArray(input);
}
