import App from './app';
import { generateGrid } from '../utils/grid';
import randomNumber from '../utils';

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
  test('has 0 dots', () => {
    expect(app.dots).toEqual(0);
  });
  test('is loading', () => {
    expect(app.loading).toEqual(true);
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
  test('has 0 dots', () => {
    expect(app.dots).toEqual(0);
  });
  test('has 0 islands', () => {
    expect(app.islands).toEqual(0);
  });
});

describe('Flipping a Cell', () => {
  test('Grid should not change if the x, y values are out of bounds', () => {
    const app = new App(height, width);
    const grid = [...app.grid];
    app.flipCell(height, width);
    expect(app.grid).toEqual(grid);
  });
  test('Grid should not change if the x, y values are out of bounds', () => {
    const app = new App(height, width);
    const grid = [...app.grid];
    app.flipCell(height, width);
    expect(app.grid).toEqual(grid);
  });
  test('Dots should not change if the x, y values are invalid', () => {
    const app = new App(height, width);
    app.flipCell(-1, -1);
    expect(app.dots).toEqual(0);
  });
  test('Dots should not change if the x, y values are out of bounds', () => {
    const app = new App(height, width);
    app.flipCell(height, width);
    expect(app.dots).toEqual(0);
  });
  test('Islands should not change if the x, y values are invalid', () => {
    const app = new App(height, width);
    app.flipCell(-1, -1);
    expect(app.dots).toEqual(0);
  });
  test('Islands should not change if the x, y values are out of bounds', () => {
    const app = new App(height, width);
    app.flipCell(height, width);
    expect(app.dots).toEqual(0);
  });
  describe('When the x, y values are valid', () => {
    const app = new App(height, width);
    const grid = [...app.grid];
    const x = 2;
    const y = 3;
    const cell = grid[y][x];
    app.flipCell(x, y);
    test('Grid cell should change', () => {
      expect(app.grid[y][x]).not.toEqual(cell);
    });
    test('Dots should change', () => {
      expect(app.dots).not.toEqual(0);
    });
    test('islands should change', () => {
      expect(app.islands).not.toEqual(0);
    });
  });
});

describe('Changing Width', () => {
  describe('value does not change', () => {
    [
      true,
      'test',
      {},
      [],
      -1,
      null,
      undefined,
      NaN,
    ].forEach((invalidValue) => {
      test(`with value ${JSON.stringify(invalidValue)}`, () => {
        const app = new App(height, width);
        app.changeWidth(invalidValue);
        expect(app.width).toEqual(width);
      });
    });
  });
  test('value changes with proper number', () => {
    const app = new App(height, width);
    const newValue = randomNumber();
    app.changeWidth(newValue);
    expect(app.width).toEqual(newValue);
  });
  test('grid changes when width changes', () => {
    const app = new App(height, width);
    const newValue = randomNumber();
    app.changeWidth(newValue);
    expect(app.grid).toEqual(generateGrid(height, newValue));
  });
});

describe('Changing Height', () => {
  describe('value does not change', () => {
    [
      true,
      'test',
      {},
      [],
      -1,
      null,
      undefined,
      NaN,
    ].forEach((invalidValue) => {
      test(`with value ${JSON.stringify(invalidValue)}`, () => {
        const app = new App(height, width);
        app.changeHeight(invalidValue);
        expect(app.height).toEqual(height);
      });
    });
  });
  test('value changes with proper number', () => {
    const app = new App(height, width);
    const newValue = randomNumber();
    app.changeHeight(newValue);
    expect(app.height).toEqual(newValue);
  });
  test('grid changes when height changes', () => {
    const app = new App(height, width);
    const newValue = randomNumber();
    app.changeHeight(newValue);
    expect(app.grid).toEqual(generateGrid(newValue, width));
  });
});

describe('Changing Loading State', () => {
  describe('value does not change', () => {
    [
      1,
      'test',
      {},
      [],
      -1,
      null,
      undefined,
      NaN,
    ].forEach((invalidValue) => {
      test(`with value ${JSON.stringify(invalidValue)}`, () => {
        const app = new App(height, width);
        app.setLoading(invalidValue);
        expect(app.loading).toEqual(true);
      });
    });
  });
  test('value changes with proper number', () => {
    const app = new App(height, width);
    const newValue = false;
    app.setLoading(newValue);
    expect(app.loading).toEqual(newValue);
  });
});

describe('setGrid', () => {
  describe('does not change', () => {
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
        const app = new App(height, width);
        app.setGrid(notAGrid);
        expect(app.grid).toEqual(generateGrid(height, width));
      });
    });
  });
  describe('changes', () => {
    const falsyGrid = [[0]];
    const truthyGrid = [[1]];
    test(`with value ${JSON.stringify(falsyGrid)}`, () => {
      const app = new App(height, width);
      app.setGrid(falsyGrid);
      expect(app.grid).toEqual(falsyGrid);
    });
    test(`with value ${JSON.stringify(truthyGrid)}`, () => {
      const app = new App(height, width);
      app.setGrid(truthyGrid);
      expect(app.grid).toEqual(truthyGrid);
    });
  });
});
