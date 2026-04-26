import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders Mulai button initially', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Mulai/i);
  expect(buttonElement).toBeInTheDocument();
});
