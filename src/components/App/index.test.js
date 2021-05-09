import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { app } from '../../models/app';
import App from './index';

test('renders app', () => {
  render(<App />);
  const component = screen.getByTestId('app');
  expect(component).toBeInTheDocument();
});

test('contains text for dots', () => {
  render(<App />);
  const component = screen.getByTestId('app');
  const text = within(component).getByText(/dots/i);
  expect(text).toBeInTheDocument();
});

test('contains the number of dots', () => {
  render(<App />);
  app.flipCell(app.height - 1, app.width - 1);
  const component = screen.getByTestId('app');
  const text = within(component).getByText(app.dots);
  expect(text).toBeInTheDocument();
});

test('contains text for islands', () => {
  render(<App />);
  const component = screen.getByTestId('app');
  const text = within(component).getByText(/islands/i);
  expect(text).toBeInTheDocument();
});
