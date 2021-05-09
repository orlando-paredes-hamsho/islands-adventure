import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import SizeInput from './index';

test('does not render without name', () => {
  render(<SizeInput />);
  const sizeInput = screen.queryByTestId('sizeInput');
  expect(sizeInput).not.toBeInTheDocument();
});

describe('with name', () => {
  test('renders', () => {
    render(<SizeInput name="test" />);
    const sizeInput = screen.getByTestId('sizeInput');
    expect(sizeInput).toBeInTheDocument();
  });
});

describe('with all props', () => {
  const value = 5;
  test('has value', () => {
    render(<SizeInput name="test" value={value} />);
    const input = screen.getByTestId('sizeInput');
    expect(input).toHaveValue(value);
  });
  test('when changed calls changeAction', () => {
    const mockFn = jest.fn();
    render(<SizeInput name="test" value={value} changeAction={mockFn} />);
    const input = screen.getByTestId('sizeInput');
    fireEvent.change(input, { target: { value: 7 } });
    expect(mockFn).toHaveBeenCalled();
  });
});
