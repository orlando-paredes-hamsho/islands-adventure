import React from 'react';
import {
  render, screen, within, fireEvent,
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
  test('displays name as text', () => {
    const name = 'test';
    render(<SizeInput name={name} />);
    const sizeInput = screen.getByTestId('sizeInput');
    expect(sizeInput).toHaveTextContent(name);
  });
  test('contains input', () => {
    render(<SizeInput name="test" />);
    const sizeInput = screen.getByTestId('sizeInput');
    const input = within(sizeInput).getByTestId('sizeInputChanger');
    expect(input).toBeInTheDocument();
  });
});

describe('with all props', () => {
  const value = 5;
  test('has value', () => {
    render(<SizeInput name="test" value={value} />);
    const sizeInput = screen.getByTestId('sizeInput');
    const input = within(sizeInput).getByTestId('sizeInputChanger');
    expect(input).toHaveValue(value);
  });
  test('when changed calls changeAction', () => {
    const mockFn = jest.fn();
    render(<SizeInput name="test" value={value} changeAction={mockFn} />);
    const sizeInput = screen.getByTestId('sizeInput');
    const input = within(sizeInput).getByTestId('sizeInputChanger');
    fireEvent.change(input, { target: { value: 7 } });
    expect(mockFn).toHaveBeenCalled();
  });
});
