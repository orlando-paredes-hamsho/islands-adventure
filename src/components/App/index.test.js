import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { app } from '../../models/app';
import App from './index';

describe('when loading', () => {
  test('renders app', () => {
    render(<App />);
    const component = screen.getByTestId('app');
    expect(component).toBeInTheDocument();
  });

  test('contains loading text', () => {
    app.setLoading(true);
    render(<App />);
    const component = screen.getByTestId('app');
    const loading = within(component).getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
});

describe('when not loading', () => {
  test('renders app', () => {
    app.setLoading(false);
    render(<App />);
    const component = screen.getByTestId('app');
    expect(component).toBeInTheDocument();
  });

  test('contains text for dots', () => {
    app.setLoading(false);
    render(<App />);
    const component = screen.getByTestId('app');
    const text = within(component).getByText(/dots/i);
    expect(text).toBeInTheDocument();
  });

  test('contains text for islands', () => {
    app.setLoading(false);
    render(<App />);
    const component = screen.getByTestId('app');
    const text = within(component).getByText(/islands/i);
    expect(text).toBeInTheDocument();
  });

  test('contains the number of dots', () => {
    app.setLoading(false);
    render(<App />);
    app.flipCell(app.height - 1, app.width - 1);
    app.flipCell(app.height - 1, app.width - 2);
    const component = screen.getByTestId('app');
    const text = within(component).getByText(app.dots);
    expect(text).toBeInTheDocument();
  });

  test('contains the number of islands', () => {
    app.setLoading(false);
    render(<App />);
    const component = screen.getByTestId('app');
    const text = within(component).getByText(app.islands);
    expect(text).toBeInTheDocument();
  });
});
