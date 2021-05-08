import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from './index';

test('renders cell', () => {
  render(<Cell />);
  const cell = screen.getByTestId('cell');
  expect(cell).toBeInTheDocument();
});

test('renders cell default', () => {
  render(<Cell />);
  const cell = screen.getByTestId('cell');
  expect(cell).toHaveClass('sea');
});

test('renders cell filled', () => {
  render(<Cell filled />);
  const cell = screen.getByTestId('cell');
  expect(cell).toHaveClass('land');
});

test('renders cell empty (filled = false)', () => {
  render(<Cell filled={false} />);
  const cell = screen.getByTestId('cell');
  expect(cell).toHaveClass('sea');
});
