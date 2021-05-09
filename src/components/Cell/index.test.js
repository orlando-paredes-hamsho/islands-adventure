import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  render(<Cell filled={1} />);
  const cell = screen.getByTestId('cell');
  expect(cell).toHaveClass('land');
});

test('renders cell empty (filled = false)', () => {
  render(<Cell filled={0} />);
  const cell = screen.getByTestId('cell');
  expect(cell).toHaveClass('sea');
});

test('when clicked calls clickAction with -1 and -1', () => {
  const myMock = jest.fn();
  render(<Cell filled={1} clickAction={myMock} />);
  fireEvent(
    screen.getByTestId('cell'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(myMock).toHaveBeenCalledWith(-1, -1);
});

test('when clicked calls clickAction with x and y if available', () => {
  const myMock = jest.fn();
  const x = 1;
  const y = 1;
  render(<Cell filled={1} clickAction={myMock} x={x} y={y} />);
  fireEvent(
    screen.getByTestId('cell'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(myMock).toHaveBeenCalledWith(x, y);
});
