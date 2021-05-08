import App from './app';

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
