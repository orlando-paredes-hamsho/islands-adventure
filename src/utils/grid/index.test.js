import {
  isGrid, generateGrid, isSafe, isNewLand, explore,
} from './index';
import randomNumber from '../index';

describe('isGrid', () => {
  describe('returns false', () => {
    [
      true,
      1,
      'test',
      {},
      undefined,
      null,
      NaN,
      [true],
      [1],
      ['test'],
      [{}],
      [undefined],
      [null],
      [NaN],
      [[true]],
      [['test']],
      [[{}]],
      [[undefined]],
      [[null]],
      [[NaN]],
    ].forEach((notAGrid) => {
      test(`with value ${JSON.stringify(notAGrid)}`, () => {
        expect(isGrid(notAGrid)).toBeFalsy();
      });
    });
  });
  describe('returns true', () => {
    const falsyGrid = [[0]];
    const truthyGrid = [[1]];
    test(`with value ${JSON.stringify(falsyGrid)}`, () => {
      expect(isGrid(falsyGrid)).toBeTruthy();
    });
    test(`with value ${JSON.stringify(truthyGrid)}`, () => {
      expect(isGrid(truthyGrid)).toBeTruthy();
    });
  });
});

describe('generateGrid', () => {
  test('returns a grid with negative params', () => {
    expect(isGrid(generateGrid(-1, -1))).toBeTruthy();
  });
  test('returns a grid with 0 params', () => {
    expect(isGrid(generateGrid(0, 0))).toBeTruthy();
  });
  describe('with proper height and width', () => {
    const height = randomNumber();
    const width = randomNumber();
    const size = height * width;
    const testGrid = generateGrid(height, width);
    test('returns a grid', () => {
      expect(isGrid(testGrid)).toBeTruthy();
    });
    test(`has ${size} elements for a grid of size ${size}`, () => {
      expect([].concat(...testGrid).length).toEqual(size);
    });
    test(`has ${height} outside elements for a grid of height ${height}`, () => {
      expect(testGrid.length).toEqual(height);
    });
    test(`has ${width} elements inside each array for a grid of width ${width}`, () => {
      testGrid.forEach((line) => expect(line.length).toEqual(width));
    });
  });
});

describe('isSafe', () => {
  const height = randomNumber();
  const width = randomNumber();
  const testGrid = generateGrid(height, width);
  test('returns false for negative values', () => {
    expect(isSafe(-1, -1, testGrid)).toBeFalsy();
  });
  test('returns false for values larger than the grid', () => {
    expect(isSafe(height, width, testGrid)).toBeFalsy();
  });
  test('returns true for values within the grid', () => {
    expect(isSafe(height - 1, width - 1, testGrid)).toBeFalsy();
  });
});

describe('isNewLand', () => {
  const height = randomNumber();
  const width = randomNumber();
  const testGrid = generateGrid(height, width);
  test('returns false for negative values', () => {
    expect(isNewLand(-1, -1, testGrid)).toBeFalsy();
  });
  test('returns false for values larger than the grid', () => {
    expect(isNewLand(height, width, testGrid)).toBeFalsy();
  });
  test('returns false for values within the grid that are not 1', () => {
    expect(isNewLand(height - 1, width - 1, testGrid)).toBeFalsy();
  });
  test('returns true for values within the grid that are 1', () => {
    const newGrid = generateGrid(height, width);
    newGrid[0][0] = 1;
    expect(isNewLand(0, 0, newGrid)).toBeTruthy();
  });
});

describe('isNewLand', () => {
  test('transforms the current position within the grid from ones into twos', () => {
    const newGrid = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const resultGrid = [
      [2, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    explore(0, 0, newGrid);
    expect(newGrid).toEqual(resultGrid);
  });
  test('transforms adjacent positions within the grid from ones into twos', () => {
    const newGrid = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const resultGrid = [
      [0, 2, 0],
      [2, 2, 2],
      [0, 2, 0],
    ];
    explore(2, 1, newGrid);
    expect(newGrid).toEqual(resultGrid);
  });
  test('does not go beyond zeros', () => {
    const newGrid = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const resultGrid = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 1],
    ];
    explore(1, 1, newGrid);
    expect(newGrid).toEqual(resultGrid);
  });
});
