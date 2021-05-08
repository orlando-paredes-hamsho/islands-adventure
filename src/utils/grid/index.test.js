import { isGrid, generateGrid } from './index';
import randomNumber from '../index';

describe('isGrid returns false', () => {
  [
    true,
    1,
    'test',
    {},
    [true],
    [1],
    ['test'],
    [{}],
    [[1]],
    [['test']],
    [[{}]],
  ].forEach((notAGrid) => {
    test(`with value ${JSON.stringify(notAGrid)}`, () => {
      expect(isGrid(notAGrid)).toBeFalsy();
    });
  });
});

describe('isGrid returns true', () => {
  const falsyGrid = [[false]];
  const truthyGrid = [[true]];
  test(`with value ${JSON.stringify(falsyGrid)}`, () => {
    expect(isGrid(falsyGrid)).toBeTruthy();
  });
  test(`with value ${JSON.stringify(truthyGrid)}`, () => {
    expect(isGrid(truthyGrid)).toBeTruthy();
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
    test('returns a grid with 0 params', () => {
      expect(isGrid(testGrid)).toBeTruthy();
    });
    test(`has ${size} elements for a grid of size ${size}`, () => {
      expect(testGrid.flat().length).toEqual(size);
    });
    test(`has ${height} outside elements for a grid of height ${height}`, () => {
      expect(testGrid.length).toEqual(height);
    });
    test(`has ${width} elements inside each array for a grid of width ${width}`, () => {
      testGrid.forEach((line) => expect(line.length).toEqual(width));
    });
  });
});
