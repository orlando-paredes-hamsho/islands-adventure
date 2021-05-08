import randomNumber from './index';

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

test('isequal to or larger than 1', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
});
