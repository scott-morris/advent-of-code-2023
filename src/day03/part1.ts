// Dependencies

import '../index.d.ts';
import type { Input, PartNumber, PartSymbol } from './index';

// Public

export function isValidPartNumber(
  partNumber: PartNumber,
  symbols: PartSymbol[]
): boolean {
  return symbols.some(({ location }) => partNumber.area.contains(location));
}

export default function part1(input: Input): Answer {
  const validPartNumbers = input.numbers.filter((partNumber) =>
    isValidPartNumber(partNumber, input.symbols)
  );

  return validPartNumbers.reduce(
    (sum, partNumber) => sum + partNumber.value,
    0
  );
}
