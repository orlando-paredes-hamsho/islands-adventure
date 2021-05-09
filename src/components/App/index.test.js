import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './index';

test('renders app', () => {
  render(<App />);
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});

test('contains text for dots', () => {
  render(<App />);
  const app = screen.getByTestId('app');
  const text = within(app).getByText(/dots/i);
  expect(text).toBeInTheDocument();
});

test('contains text for islands', () => {
  render(<App />);
  const app = screen.getByTestId('app');
  const text = within(app).getByText(/islands/i);
  expect(text).toBeInTheDocument();
});
