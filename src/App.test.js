import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tujuan/i);
  expect(linkElement).toBeInTheDocument();
});
