export {};

declare global {
  /**
   * Inputs get imported as strings. They are either single-line strings
   * or multi-line strings.
   */
  type RawInput = string | string[];

  /**
   * Some common mutations to perform on RawInputs
   */
  namespace Input {
    type StringArray = string[];
    type NumberArray = number[];
    type PatternArray = (RegExpMatchArray | null)[];
    type StringMatrix = Array<string[]>;
    type NumberMatrix = Array<number[]>;
  }

  /**
   * An answer must fit into a text field so it must be a string or number.
   */
  type Answer = string | number | bigint | undefined;

  interface TimedAnswer {
    result: Answer;
    duration: number;
  }

  type Key = string | number;

  type Stringable = string | string[] | number | number[] | null;

  type SimpleObject = {
    [key: Key]: string | number;
  };
}
