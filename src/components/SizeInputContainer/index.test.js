import React from 'react';
import { render, screen } from '@testing-library/react';
import SizeInputContainer from './index';

test('does not render without name', () => {
  render(<SizeInputContainer />);
  const sizeInput = screen.queryByTestId('sizeInputContainer');
  expect(sizeInput).not.toBeInTheDocument();
});

describe('with name', () => {
  test('renders', () => {
    render(<SizeInputContainer name="test" />);
    const sizeInput = screen.getByTestId('sizeInputContainer');
    expect(sizeInput).toBeInTheDocument();
  });
  test('displays name as text', () => {
    const name = 'test';
    render(<SizeInputContainer name={name} />);
    const sizeInput = screen.getByTestId('sizeInputContainer');
    expect(sizeInput).toHaveTextContent(name);
  });
});
