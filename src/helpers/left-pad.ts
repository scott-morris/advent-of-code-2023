export interface leftPadOptions {
  length: number;
  padWith: string;
}

export function leftPad(
  value: string | number,
  { length = 2, padWith = '0' }: leftPadOptions
): string {
  const strValue = String(value);
  const str = padWith.repeat(length) + strValue;
  return strValue.length < length ? str.slice(str.length - length) : strValue;
}
