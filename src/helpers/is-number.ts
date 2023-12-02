export default function isNumber(str: string): boolean {
  return !isNaN(Number(str));
}
