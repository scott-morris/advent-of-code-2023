export function getItemAtIndex<T>(arr: T[], index: number): T {
  if (index >= 0) {
    return arr[index % arr.length];
  } else {
    const positiveIndex =
      arr.length === 1 ? 0 : arr.length - (Math.abs(index) % arr.length);
    return arr[positiveIndex];
  }
}
