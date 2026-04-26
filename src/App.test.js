import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders main content correctly', () => {
  render(<App />);
  const navElement = screen.getByText(/Tujuan/i);
  expect(navElement).toBeInTheDocument();
});
