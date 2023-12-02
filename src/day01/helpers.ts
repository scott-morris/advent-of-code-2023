import isNumber from "@helpers/is-number.ts";
import { getItemAtIndex } from "@helpers/array.ts";

const DIGITS: { [key: string]: string } = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export function parseNumberFromString(input: string): number[] {
  return input
    .split("")
    .reduce(
      (arr: number[], char) => (isNumber(char) ? [...arr, Number(char)] : arr),
      []
    );
}

export function parseIteration(input: string): number {
  const numbers = parseNumberFromString(input);
  return getItemAtIndex(numbers, 0) * 10 + getItemAtIndex(numbers, -1);
}

export function replaceSpelledDigits(str: string): string {
  const digits: string[] = [];
  const DIGIT_REGEX = /(one|two|three|four|five|six|seven|eight|nine|[0-9])/;
  let line = str;
  let match;

  while ((match = line.search(DIGIT_REGEX)) > -1) {
    line = line.slice(match);
    const [firstChar, ...remaining] = line;
    if (isNumber(firstChar)) {
      digits.push(firstChar);
    } else {
      Object.keys(DIGITS).forEach((key) => {
        if (line.slice(0, key.length) === key) {
          digits.push(DIGITS[key]);
          return;
        }
      });
    }
    line = remaining.join("");
  }

  return digits.join("");
}
