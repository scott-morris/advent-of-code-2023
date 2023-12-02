// Dependencies

import * as parse from '@helpers/parse-input.ts';
import '../index.d.ts';
import type { Input } from './index.ts';

// Public

export default function parseInput(input: string): Input {
  return parse.arrayOfStrings(input);
}
