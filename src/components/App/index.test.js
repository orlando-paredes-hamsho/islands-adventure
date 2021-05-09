import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
