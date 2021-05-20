import randomNumber, {
  toInt, isNumericChar, hashToArray, hashArrayToLine, hashToLine,
} from './index';

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

describe('isNumericChar', () => {
  describe('returns false', () => {
    [
      true,
      [],
      'test',
      {},
      undefined,
      null,
      NaN,
      'a',
    ].forEach((invalidValue) => {
      test(`with value ${JSON.stringify(invalidValue)}`, () => {
        expect(isNumericChar(invalidValue)).toBeFalsy();
      });
    });
  });
  describe('returns true', () => {
    [
      '0',
      '1',
    ].forEach((value) => {
      test(`with value ${JSON.stringify(value)}`, () => {
        expect(isNumericChar(value)).toBeTruthy();
      });
    });
  });
});

describe('hashToArray', () => {
  describe('converts to array', () => {
    const hash = '3a9eddb36b531ac3a4912d241a1eccd6263e5ed485b028edd8d21b17ceee6f6a';
    const expectedArray = [
      '3', 'a', '9', 'e', 'd', 'd', 'b', '3', '6', 'b', '5', '3', '1', 'a',
      'c', '3', 'a', '4', '9', '1', '2', 'd', '2', '4', '1', 'a', '1', 'e',
      'c', 'c', 'd', '6', '2', '6', '3', 'e', '5', 'e', 'd', '4', '8', '5',
      'b', '0', '2', '8', 'e', 'd', 'd', '8', 'd', '2', '1', 'b', '1', '7',
      'c', 'e', 'e', 'e', '6', 'f', '6', 'a',
    ];
    test(`with value ${JSON.stringify(hash)}`, () => {
      expect(hashToArray(hash)).toEqual(expectedArray);
    });
  });
});

describe('hashArrayToLine', () => {
  describe('converts to array of ones and ceros', () => {
    const hashArray = [
      '3', 'a', '9', 'e', 'd', 'd', 'b', '3', '6', 'b', '5', '3', '1', 'a',
      'c', '3', 'a', '4', '9', '1', '2', 'd', '2', '4', '1', 'a', '1', 'e',
      'c', 'c', 'd', '6', '2', '6', '3', 'e', '5', 'e', 'd', '4', '8', '5',
      'b', '0', '2', '8', 'e', 'd', 'd', '8', 'd', '2', '1', 'b', '1', '7',
      'c', 'e', 'e', 'e', '6', 'f', '6', 'a',
    ];
    const expectedArray = [
      1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1,
      0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    ];
    test(`with value ${JSON.stringify(hashArray)}`, () => {
      expect(hashArrayToLine(hashArray)).toEqual(expectedArray);
    });
  });
});

describe('hashToLine', () => {
  describe('converts to array of ones and ceros', () => {
    const hash = '3a9eddb36b531ac3a4912d241a1eccd6263e5ed485b028edd8d21b17ceee6f6a';
    const expectedArray = [
      1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1,
      0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    ];
    test(`with value ${JSON.stringify(hash)}`, () => {
      expect(hashToLine(hash)).toEqual(expectedArray);
    });
  });
});
