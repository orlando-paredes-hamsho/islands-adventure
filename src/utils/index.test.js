import randomNumber, { toInt } from './index';

describe('randomNumber', () => {
  test('is a number', () => {
    expect(typeof randomNumber()).toEqual('number');
  });
  test('is a round number', () => {
    const num = randomNumber();
    expect(num).toEqual(Math.floor(num));
  });
  test('is equal to or smaller than 100', () => {
    expect(randomNumber()).toBeLessThanOrEqual(100);
  });
  test('is equal to or larger than 1', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
  });
});

describe('toInt', () => {
  describe('returns 0', () => {
    [
      true,
      [],
      'test',
      {},
      undefined,
      null,
      NaN,
    ].forEach((invalidValue) => {
      test(`with value ${JSON.stringify(invalidValue)}`, () => {
        expect(toInt(invalidValue)).toEqual(0);
      });
    });
  });
  describe('returns the int', () => {
    [
      1,
      '1',
    ].forEach((value) => {
      test(`with value ${JSON.stringify(value)}`, () => {
        expect(toInt(value)).toEqual(1);
      });
    });
  });
});
