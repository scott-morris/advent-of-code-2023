// Dependencies

import * as parse from '@helpers/parse-input.ts';
import '../index.d.ts';
import type { Input, PartNumber, PartSymbol } from './index.ts';
import { Area } from '@helpers/matrix.ts';
import { clamp } from '@helpers/math.ts';

// Public

const RE_NUMBER = /\d+/;
const RE_SYMBOL = /[^0-9.]/;

export function findPartNumbers(lines: string[]): PartNumber[] {
  const partNumbers: PartNumber[] = [];

  lines.forEach((line, y) => {
    let index = 0;
    for (let found = RE_NUMBER.exec(line); found !== null; ) {
      const value = found[0];
      index += found.index;

      // The target area is { x-1, y-1 } to { x+length+1, y+1 }
      const area = new Area(
        { x: index - 1, y: y - 1 },
        { x: index + value.length, y: y + 1 }
      );

      partNumbers.push({
        value: Number(value),
        area,
      });

      // Remove up to the end of the number
      line = line.slice(found.index + value.length);
      index += value.length;
      found = RE_NUMBER.exec(line);
    }
  });

  return partNumbers;
}

export function findPartSymbols(lines: string[]): PartSymbol[] {
  const partSymbols: PartSymbol[] = [];

  lines.forEach((line, y) => {
    for (let index = 0, found = RE_SYMBOL.exec(line); found !== null; ) {
      const symbol = found[0];
      index += found.index;

      partSymbols.push({
        symbol,
        location: { x: index, y },
      });

      // Remove up to after the symbol
      line = line.slice(found.index + 1);
      index++;
      found = RE_SYMBOL.exec(line);
    }
  });

  return partSymbols;
}

export default function parseInput(input: string): Input {
  const lines = parse.arrayOfStrings(input);
  return {
    numbers: findPartNumbers(lines),
    symbols: findPartSymbols(lines),
  };
}
