// Dependencies

// Types

import '../index.d.ts';
import type { Input, PartNumber, PartSymbol } from './index.ts';

// Public

export function getGearRatio(
  symbol: PartSymbol,
  partNumbers: PartNumber[]
): number {
  if (symbol.symbol !== '*') {
    return 0;
  }

  const adjacentNumbers = partNumbers.filter((partNumber) =>
    partNumber.area.contains(symbol.location)
  );
  return adjacentNumbers.length === 2
    ? adjacentNumbers[0].value * adjacentNumbers[1].value
    : 0;
}

export default function part2(input: Input): Answer {
  return input.symbols.reduce(
    (sum, symbol) => sum + getGearRatio(symbol, input.numbers),
    0
  );
}
