import App from './app';
import { generateGrid } from '../utils/grid';

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
  const height = 10;
  const width = 5;
  const app = new App(height, width);
  test('has 0 height', () => {
    expect(app.height).toEqual(height);
  });
  test('has 0 width', () => {
    expect(app.width).toEqual(width);
  });
  test('has an empty grid', () => {
    expect(app.grid).toEqual(generateGrid(height, width));
  });
});
