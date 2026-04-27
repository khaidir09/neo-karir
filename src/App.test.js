import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders application starting without intro video (skipped for test/dev config)', () => {
  render(<App />);
  const buttonElement = screen.getByText(/MULAI/i);
  expect(buttonElement).toBeInTheDocument();
});
