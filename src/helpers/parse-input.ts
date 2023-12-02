/**
 * Parse the raw AoC input into sections of strings to handle
 * @param input the raw input from AoC
 * @param delimiter defaults to "\n"
 * @returns an array of strings
 * @example
 * arrayOfStrings(`abc
 * def
 * ghi`) // ["abc", "def", "ghi"]
 * arrayOfStrings("abc", ""); // ["a", "b", "c"]
 * arrayOfStrings("a,b,c", ","); // ["a", "b", "c"]
 */
export function arrayOfStrings(
  input: string,
  delimiter = "\n"
): Input.StringArray {
  return Array.isArray(input) ? input : input.split(delimiter);
}

/**
 * Parse the raw AoC input into sections of integers to handle
 * @param input the raw input from AoC
 * @param delimiter defaults to "\n"
 * @returns an array of integers
 * @example
 * arrayOfIntegers(`12
 * 34
 * 5`) // [12, 34, 5]
 * arrayOfIntegers("12345", ""); // [1, 2, 3, 4, 5]
 * arrayOfIntegers("1,2,3", ","); // [1, 2, 3]
 */
export function arrayOfIntegers(
  input: string,
  delimiter = "\n"
): Input.NumberArray {
  const arr = Array.isArray(input) ? input : input.split(delimiter);
  return arr.map((value: string | number) =>
    typeof value === "number" ? value : parseInt(value, 10)
  );
}

/**
 * Parse the raw AoC input into to handle as a string matrix
 * @param input the raw input from AoC
 * @param columnDelimiter the delimiter for the columns, defaults to ""
 * @param rowDelimiter the delimiter for the rows, defaults to "\n"
 * @returns 2d array of strings
 * @example
 * stringMatrix(`abc
 * def
 * ghi`) // [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
 */
export function stringMatrix(
  input: string,
  columnDelimiter = "",
  rowDelimiter = "\n"
): Input.StringMatrix {
  const rows = Array.isArray(input) ? input : input.split(rowDelimiter);
  return rows.map((row) => arrayOfStrings(row, columnDelimiter));
}

/**
 * Parse the raw AoC input into to handle as a string matrix
 * @param input the raw input from AoC
 * @param columnDelimiter the delimiter for the columns, defaults to ""
 * @param rowDelimiter the delimiter for the rows, defaults to "\n"
 * @returns 2d array of strings
 * @example
 * stringMatrix(`123
 * 456
 * 789`) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
export function integerMatrix(
  input: RawInput,
  columnDelimiter = "",
  rowDelimiter = "\n"
): Input.NumberMatrix {
  const rows = Array.isArray(input) ? input : input.split(rowDelimiter);
  return rows.map((row) => arrayOfIntegers(row, columnDelimiter));
}
