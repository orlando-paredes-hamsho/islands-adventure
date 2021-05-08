import App from './app';
import { generateGrid } from '../utils/grid';

const height = 10;
const width = 5;

describe('App default values', () => {
  const app = new App();
  test('has 0 height', () => {
    expect(app.height).toEqual(0);
  });
  test('has 0 width', () => {
    expect(app.width).toEqual(0);
  });
  test('has an empty grid', () => {
    expect(app.grid).toEqual([]);
  });
});

describe('App with param values', () => {
  const app = new App(height, width);
  test(`has ${height} height`, () => {
    expect(app.height).toEqual(height);
  });
  test(`has ${width} width`, () => {
    expect(app.width).toEqual(width);
  });
  test('has a proper grid', () => {
    expect(app.grid).toEqual(generateGrid(height, width));
  });
});

describe('Flipping a Cell', () => {
  const app = new App(height, width);
  const grid = [...app.grid];
  test('Grid should not change if the x, y values are out of bounds', () => {
    app.flipCell(height, width);
    expect(app.grid).toEqual(grid);
  });
  test('Grid should not change if the x, y values are invalid', () => {
    app.flipCell(-1, -1);
    expect(app.grid).toEqual(grid);
  });
  describe('When the x, y values are valid', () => {
    const x = 2;
    const y = 3;
    const cell = grid[y][x];
    app.flipCell(x, y);
    test('Grid cell should change', () => {
      expect(app.grid[y][x]).not.toEqual(cell);
    });
  });
});
