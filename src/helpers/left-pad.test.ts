// Libraries

import { describe, expect, test } from 'bun:test';
import { leftPad } from './left-pad';

describe('leftPad.ts', () => {
  describe('leftPad()', () => {
    test('given an empty string, it just returns the padding', () => {
      expect(leftPad('', { length: 2, padWith: '#' })).toEqual('##');
    });

    test('given a short string, it pads it', () => {
      expect(leftPad('7', { length: 3, padWith: '0' })).toEqual('007');
    });

    test('given a long string, it does not pad it', () => {
      expect(leftPad('8675309', { length: 3, padWith: '0' })).toEqual(
        '8675309'
      );
    });

    test('given a short number, it pads it', () => {
      expect(leftPad(7, { length: 3, padWith: '0' })).toEqual('007');
    });

    test('given a long number, it does not pad it', () => {
      expect(leftPad(8675309, { length: 3, padWith: '0' })).toEqual('8675309');
    });
  });
});
