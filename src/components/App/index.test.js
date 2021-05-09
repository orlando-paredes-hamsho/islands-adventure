import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders app', () => {
  render(<App />);
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
