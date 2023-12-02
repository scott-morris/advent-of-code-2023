// Libraries

import { describe, expect, test } from 'bun:test';
import { getItemAtIndex } from './array';

describe('array.ts', () => {
  describe('getItemAtIndex()', () => {
    test('it can get the first item', () => {
      expect(getItemAtIndex(['a', 'b', 'c'], 0)).toEqual('a');
    });

    test('it can get an item with a positive index', () => {
      expect(getItemAtIndex(['a', 'b', 'c'], 1)).toEqual('b');
    });

    test('it can get an item with a negative index', () => {
      expect(getItemAtIndex(['a', 'b', 'c'], -1)).toEqual('c');
    });

    test('it wraps when the index is larger than the array', () => {
      expect(getItemAtIndex(['a', 'b', 'c'], 3)).toEqual('a');
    });

    test('it can handle single item arrays', () => {
      expect(getItemAtIndex(['a'], -1)).toEqual('a');
    });
  });
});
