export function isNumber(str: string): boolean {
  return !isNaN(Number(str));
}

export function isInteger(str: string): boolean {
  return isNumber(str) && Number(str) === parseInt(str, 10);
}
