import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { generateGrid } from '../../utils/grid';
import randomNumber from '../../utils';
import Grid from './index';

test('renders grid', () => {
  render(<Grid />);
  const grid = screen.getByTestId('grid');
  expect(grid).toBeInTheDocument();
});

test('renders empty grid with text without props', () => {
  render(<Grid />);
  const grid = screen.getByTestId('grid');
  expect(grid).toHaveTextContent('The World is empty');
});

describe('with a grid prop', () => {
  const height = randomNumber();
  const width = randomNumber();
  const size = height * width;
  const testGrid = generateGrid(height, width);
  beforeEach(() => {
    render(<Grid grid={testGrid} />);
  });
  test(`has ${size} cells for a grid of size ${size}`, () => {
    const grid = screen.getByTestId('grid');
    const lines = within(grid).getAllByTestId('cell');
    expect(lines.length).toEqual(size);
  });
  test(`has ${height} lines for a grid of height ${height}`, () => {
    const grid = screen.getByTestId('grid');
    const lines = within(grid).getAllByTestId('line');
    expect(lines.length).toEqual(height);
  });
  test(`has ${width} cells per line for a grid of width ${width}`, () => {
    const grid = screen.getByTestId('grid');
    const lines = within(grid).getAllByTestId('line');
    lines.forEach((line) => {
      const cells = within(line).getAllByTestId('cell');
      expect(cells.length).toEqual(width);
    });
  });
});
