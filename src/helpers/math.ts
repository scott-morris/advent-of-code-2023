export function between(value: number, num1: number, num2: number): boolean {
  const [smaller, larger] = [num1, num2].sort((a, b) => a - b);
  return value >= smaller && value <= larger;
}

/**
 * Clamp a value between two boundaries
 * @param value The value to clamp between the other two
 * @param num1 One of the boundary values
 * @param num2 The other boundary value
 * @returns The value, if it is between the two boundaries, otherwise it returns the boundary
 * @example
 * clamp(50, 1, 100);  // 50
 * clamp(50, 1, 25);   // 25
 * clamp(50, 75, 100); // 75
 */
export function clamp(value: number, num1: number, num2: number): number {
  const [smaller, larger] = [num1, num2].sort();
  return Math.max(Math.min(larger, value), smaller);
}
