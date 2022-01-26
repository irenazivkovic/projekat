import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Is app rendered', () => {
  render(<App />);
  expect(screen.queryByTestId('App:Container')).toBeInTheDocument();
});
